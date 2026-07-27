import {
  FiMenu,
  FiHome,
  FiBarChart2,
  FiBriefcase,
  FiGithub,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import PromoCard from "./PromoCard";

export default function Sidebar({
  isopen,
  setisopen,
  analytics,
  setAnalytics,
  jobs,
  setJobs,
}: {
  isopen: boolean;
  analytics: boolean;
  jobs: boolean;
  setisopen: (isOpen: boolean) => void;
  setAnalytics: (analytics: boolean) => void;
  setJobs: (jobs: boolean) => void;
}) {
  const handleAnalytics = () => {
    setAnalytics(true);
    setJobs(false);
  };

  const handleJobs = () => {
    setJobs(true);
    setAnalytics(false);
  };

  const toggleSidebar = () => {
    setisopen(!isopen);
  };

  return (
    <aside className="flex-shrink-0 flex flex-col bg-black text-white p-4 w-full md:w-64 md:h-screen">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-200 hover:text-white transition-colors"
        >
          <FiMenu />
        </button>
      </div>

      <nav className="space-y-2">
        <Link
          to="/"
          className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-slate-800 hover:text-white transition-colors"
        >
          <FiHome size={18} />
          <span>Home</span>
        </Link>

        <button
          onClick={handleAnalytics}
          className={`flex w-full items-center gap-3 rounded p-2 text-left transition-colors ${
            analytics
              ? "bg-slate-700 text-white"
              : "text-gray-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FiBarChart2 size={18} />
          <span>Analytics</span>
        </button>

        <button
          onClick={handleJobs}
          className={`flex w-full items-center gap-3 rounded p-2 text-left transition-colors ${
            jobs
              ? "bg-slate-700 text-white"
              : "text-gray-300 hover:bg-slate-800 hover:text-white"
          }`}
        >
          <FiBriefcase size={18} />
          <span>Jobs</span>
        </button>
      </nav>

      <PromoCard />

      <div className="mt-auto hidden md:block">
        <div className="border-t border-slate-700 pt-4">
          <p className="mb-3 text-xs uppercase tracking-wider text-gray-400">
            Follow Us
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <FiTwitter size={20} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition hover:text-white"
            >
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}