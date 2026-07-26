import express, { Router } from "express";
import { logout, register, login, getme } from "../controller/auth.js";
import { isAuth } from "../middleware/isAuth.js";
const authRoute:Router = express.Router();


authRoute.post("/signup", register);
authRoute.post("/login", login);
authRoute.get("/me", isAuth, getme);
authRoute.post("/logout", isAuth, logout);
export default authRoute;