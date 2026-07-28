import Groq from "groq-sdk";
import generateJobPrompt from "../lib/jobPrompt.js";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function jobMatcher(message: string, resumeSkills: string[], jobSkillsKeyWord: string[]) {
  const completion = await getGroqChatCompletion(message, resumeSkills, jobSkillsKeyWord);
    return completion.choices[0]?.message?.content
}

export const getGroqChatCompletion = async ( message: string, resumeSkills: string[], jobSkillsKeyWord: string[] ) => {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: generateJobPrompt(resumeSkills, jobSkillsKeyWord),
      },
      {
        role: "user",
        content: message,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
};