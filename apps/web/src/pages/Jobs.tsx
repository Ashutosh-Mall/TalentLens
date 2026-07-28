import {useState } from "react";
import {api} from "../api/api";

export default function Jobs() {
  // const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !location.trim()) return;

    try {
      const response = await api.get("/jobs", { params: { title, location } });
      console.log(response.data.response);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Job Title"
            className="w-full md:flex-1 border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full md:flex-1 border p-2 rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-black text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
