import express, { Router } from "express";
import { uploadResume,getResumes } from "../controller/resume.js";
import { isAuth } from "../middleware/isAuth.js";
import { upload } from "../middleware/upload.js";

const resumeRoute: Router = express.Router();

resumeRoute.post("/upload", isAuth, upload.single("file"), uploadResume);
resumeRoute.get("/", isAuth, getResumes);
export default resumeRoute;