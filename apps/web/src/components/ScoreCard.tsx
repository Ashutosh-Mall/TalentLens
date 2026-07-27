import {Pie} from "react-chartjs-2";

export default function ScoreCard({
  scores,
}: {
  scores: {
    overall: number;
    experienceScore: number;
    educationScore: number;
    skillScore: number;
    projectScore: number;
  };
}) {
  const data = {
    labels: ["Overall", "Experience", "Education", "Skills", "Projects"],
    datasets: [
      {
        data: [
          scores.overall,
          scores.experienceScore,
          scores.educationScore,
          scores.skillScore,
          scores.projectScore,
        ],
        backgroundColor: [
          "#000000",
          "#333333",
          "#666666",
          "#999999",
          "#CCCCCC",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Resume Analysis</h2>

      <Pie data={data} />
    </div>
  );
}
