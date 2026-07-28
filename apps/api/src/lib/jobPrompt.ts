export default function generateJobPrompt(
  resumeSkills: string[],
  jobSkillsKeyWord: string[]
): string {
  return `
You are an expert technical recruiter and ATS evaluator.

Resume Skills:
${JSON.stringify(resumeSkills)}

Job Required Skills:
${JSON.stringify(jobSkillsKeyWord)}

Return ONLY valid JSON in exactly this format:

{
  "matchPercentage": 0,
  "hireChance": "Low",
  "matchedSkills": [],
  "missingSkills": []
}

Rules:
1. matchPercentage must be a number between 0 and 100.
2. hireChance must be one of: "Low", "Medium", "High".
3. matchedSkills must contain skills present in both lists.
4. missingSkills must contain important job skills missing from the resume.
5. Return ONLY valid JSON.
6. Do not include markdown.
7. Do not include code fences.
8. Do not include explanations.
9. Do not include any extra fields.
`;
}