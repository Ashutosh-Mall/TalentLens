import {Job, fetchJobs} from "../lib/jobSearch.js";
import {queryType} from "../config/jobQuery.js";
import {Request, Response} from "express";
import {jobMatcher} from "../config/jobMatching.js";
import {prisma} from "@repo/db";

export const getJobs = async (req: Request, res: Response) => {
  try {
    const {title, location} = req.query;

    const time_frame = "24h";
    const limit = "5";
    const offset = "0";
    const description_format = "text";

    if (!title || !location) {
      return res
        .status(400)
        .json({error: "Missing required query parameters."});
    }

    const queryData: queryType = {
      time_frame: time_frame as string,
      limit: limit as string,
      offset: offset as string,
      description_format: description_format as string,
      title: title as string,
      location: location as string,
    };
    
    const jobs: Job[] = await fetchJobs(queryData);

    const userId = req.userId;

    const user = await prisma.user.findUnique({
      where: {id: userId},
      select: {resumes: true},
    });

    const response = [];

    for (const job of jobs) {
      const jobSkillsKeyWord = [
        ...job.ai_key_skills,
        ...(job.ai_keywords || []),
      ];

      const resumeSkills = user?.resumes[0]?.tags || [];

      let matchResult: any = await jobMatcher(
        "Match the resume skills with the job skills and provide a match score.",
        resumeSkills,
        jobSkillsKeyWord,
      );

      try {
        matchResult = matchResult
          .replace(/```json\s*/i, "")
          .replace(/```/g, "")
          .trim();

        matchResult = JSON.parse(matchResult);
      } catch (err) {
        console.error("Failed to parse JSON");
        console.error("Raw response:");
        console.error(matchResult);

        continue;
      }

      response.push({
        ...job,
        matchResult,
      });
    }

    res.json(response);
  } catch (error) {
    res.status(500).json({error: "Failed to fetch jobs."});
  }
};
