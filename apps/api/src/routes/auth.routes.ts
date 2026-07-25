import express, { Router } from "express";
import { register } from "../controller/auth.js";
const authRoute:Router = express.Router();


authRoute.post("/signup", register);  
export default authRoute;