import Groq from "groq-sdk";
import {ATS_PROMPT} from "../lib/atsPromt.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function resumeAnalyzer(message: string) {
  const completion = await getGroqChatCompletion(message);
    return completion.choices[0]?.message?.content
}

export const getGroqChatCompletion = async ( message: string ) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: ATS_PROMPT,
      },
      {
        role: "user",
        content: message,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
};