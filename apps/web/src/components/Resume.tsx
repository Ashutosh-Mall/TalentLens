import ScoreCard from "./ScoreCard";
interface Score {
  overall: number;
  skillScore: number;
  experienceScore: number;
  projectScore: number;
  educationScore: number;
}

interface ATSAnalysis {
  tags: string[];
  scores: Score;
  summary: string;
  experience: number;
  missingSkills: string[];
  suggestions: string[];
}

export interface ResumeType {
  userId: string;
  title: string;
  fileUrl: string;
  fileSize: number;
  tags: string[];
  atsAnalysis: ATSAnalysis;
  experience: number;
  summary: string;
}

export default function Resume({resumes}: {resumes: ResumeType[]}) {
  return (
    <>
      <div>
        {resumes.map((resume, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4 bg-white">
            <h2 className="text-xl font-bold">{resume?.title}</h2>

            <p className="text-gray-600 mt-1">{resume?.summary}</p>

            <p className="text-sm text-gray-500 mt-2">
              Experience: {resume?.experience} years
            </p>

            <div className="flex flex-col lg:flex-row gap-4 mt-4">
              <div className="w-full lg:w-1/3">
                <ScoreCard scores={resume?.atsAnalysis.scores} />
              </div>

              <div className="w-full lg:w-2/3">
                <iframe
                  src={resume?.fileUrl}
                  title={resume.title}
                  className="w-full h-[250px] border rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    ATS Analysis
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resume?.atsAnalysis?.tags?.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Suggestions</h4>

                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {resume?.atsAnalysis?.suggestions?.map(
                        (suggestion: string, idx: number) => (
                          <li key={idx}>{suggestion}</li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
