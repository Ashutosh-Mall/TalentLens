import {useState, useEffect} from "react";
import {api} from "../api/api";
import Resume, {type ResumeType} from "../components/Resume";

export default function Analytics() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [resumes, setResumes] = useState<ResumeType[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !file) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const response = await api.post("/resume/upload", formData);

      console.log(response.data);

      setTitle("");
      setFile(null);
      fetchResumes();
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const fetchResumes = async () => {
    try {
      const response = await api.get("/resume/");
      console.log("Fetched resumes:", response.data.data);
      setResumes(Array.isArray(response.data?.data) ? response.data.data : []);
    } catch (error) {
      setResumes([]);
      console.error("Error fetching resumes:", error);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  return (
    <div className="w-full p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="File Title"
            className="w-full md:flex-1 border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            className="w-full md:flex-1 border p-2 rounded"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-black text-white px-4 py-2 rounded"
          >
            Upload File
          </button>
        </div>
      </form>
      <div className="mt-8">
        <Resume resumes={resumes} />
      </div>
    </div>
  );
}
