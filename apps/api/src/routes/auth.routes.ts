import express, { Router } from "express";
import { logout, register, login } from "../controller/auth.js";
const authRoute:Router = express.Router();


authRoute.post("/signup", register);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
export default authRoute;