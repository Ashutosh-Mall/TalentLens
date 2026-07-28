import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { prisma } from "@repo/db";
import authRoute from "./routes/auth.routes.js";
import resumeRoute from "./routes/resume.routes.js";
import jobRoute from "./routes/job.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
    credentials: true,
  }),
);


app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/resume", resumeRoute);
app.use("/api/jobs", jobRoute);


app.get("/db-check", async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});



app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("User creation error:", error);

    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World! from backend");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});