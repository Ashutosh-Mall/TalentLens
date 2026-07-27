import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import {useState} from "react";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [analytics, setAnalytics] = useState(true);
  const [jobs, setJobs] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col md:flex-row bg-gray-100">
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
