import express, { Router } from "express";
import { isAuth } from "../middleware/isAuth.js";
import { getJobs } from "../controller/jobs.js";


const jobRoute: Router = express.Router();

jobRoute.get("/", isAuth, getJobs);

export default jobRoute;