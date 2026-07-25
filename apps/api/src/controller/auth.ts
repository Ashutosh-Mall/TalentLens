import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { prisma } from "@repo/db";
import bcrypt from "bcrypt";
import { redis } from "@repo/redis";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const generateToken = (userId: string) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });
};

const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Name, email, and password are required." });
        }
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        const userData = { id: user.id, name: user.name, email: user.email };

        const token = generateToken(user.id);
        redis.set(`user:${user.id}`, JSON.stringify(userData), "EX", 3600);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production" || false,
        });

        res.status(201).json({ user: userData });
    } catch (error) {
        res.status(500).json({ message: "Error registering user." });
    }
};

export { register };
