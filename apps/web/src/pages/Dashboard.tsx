import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import {useState} from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [jobs, setJobs] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row z-10 top-0 left-0 right-0 fixed">
      {isSidebarOpen && (
        <Sidebar
          isopen={isSidebarOpen}
          setisopen={setIsSidebarOpen}
          analytics={analytics}
          setAnalytics={setAnalytics}
          jobs={jobs}
          setJobs={setJobs}
        />
      )}
      <MainContent
        isopen={isSidebarOpen}
        setisopen={setIsSidebarOpen}
        analytics={analytics}
        jobs={jobs}
      />
    </div>
  );
}
