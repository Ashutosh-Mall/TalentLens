import axios from "axios";
import { queryType } from "../config/jobQuery.js";
import { jobOptions } from "../config/jobQuery.js";

export interface Job {
  id: number;
  date_posted: string;
  title: string;
  organization: string;
  ai_key_skills: string[];
  url: string;
  ai_keywords: string[];
  description_text: string;
}

export async function fetchJobs(queryData: queryType) {
  try {
    const options = jobOptions(queryData);
    if (!options) {
      throw new Error("Failed to create job options.");
    }
    const response: { data: Job[] } = await axios.request(options);
    return response.data.map((job: Job) => ({
      id: job.id,
      date_posted: job.date_posted,
      title: job.title,
      organization: job.organization,
      ai_key_skills: job.ai_key_skills,
      url: job.url,
      ai_keywords: job.ai_keywords,
      description_text: job.description_text,
    }));
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
};

// const response = await fetchJobs({ time_frame: "24h", limit: "10", offset: "0", description_format: "text", title: "Software Engineer", location: "India" });

// console.log("Fetched Jobs:", response);