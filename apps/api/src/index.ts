import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { prisma } from "@repo/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: `process.env.CLIENT_URL`,
    credentials: true,
  }),
);


app.use(cookieParser());

app.use(express.json());
app.get("/db-check", async (req, res) => {
  try {
    await prisma.$connect();

    res.status(200).json({
      success: true,
      message: "Database connected successfully",
    });
  } catch (error) {
    console.error("DB Error:", error);

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