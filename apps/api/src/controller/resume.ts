import {Request, Response} from "express";
import fs from "fs";
import {uploadOnCloudinary} from "../config/uploadOnCloudinary.js";
import {prisma} from "@repo/db";
import {readFile} from "node:fs/promises";
import {PDFParse} from "pdf-parse";
import {resumeAnalyzer} from "../config/resumeAnalyzer.js";

interface dataType {
  userId: string;
  title: string;
  fileUrl: string;
  fileSize: number;
  tags: string[];
  atsAnalysis: object;
  experience: number;
  summary: string;
}

export const getResumes = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;

    const resumes = await prisma.resume.findMany({
      where: {userId},
    });

    res.status(200).json({
      message: "Resumes retrieved successfully",
      data: resumes || [],
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error retrieving resumes",
      error: error?.message,
    });
  }
};

export const uploadResume = async (req: Request, res: Response) => {
  try {
    const {title} = req.body;
    const userId = req.userId;

    if (!title) {
      return res.status(400).json({message: "Title is required"});
    }

    const localFilePath = req.file?.path;

    if (!localFilePath) {
      return res.status(400).json({message: "No file uploaded"});
    }

    const buffer = await readFile(localFilePath);
    console.log("Buffer size:", buffer.length);

    const parser = new PDFParse({data: buffer});

    const result = await parser.getText();

    let analysisResult: any = await resumeAnalyzer(result.text);

    analysisResult = analysisResult
      .replace(/```json\s*/i, "")
      .replace(/```/g, "")
      .trim();

    analysisResult = JSON.parse(analysisResult);

    const uploadResult = await uploadOnCloudinary(localFilePath);

    console.dir(uploadResult, {depth: null});

    fs.unlinkSync(localFilePath);

    const resume = await prisma.resume.create({
      data:<dataType>{
        userId,
        title,
        fileUrl: uploadResult?.secure_url || "",
        fileSize: uploadResult?.bytes || 0,
        tags: analysisResult.tags || [],
        atsAnalysis: analysisResult || {},
        experience: analysisResult.experience || 0,
        summary: analysisResult.summary || "",
      },
    });

    res.status(200).json({
      message: "Resume uploaded successfully",
      data: resume,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error uploading resume",
      error: error?.message,
    });
  }
};
