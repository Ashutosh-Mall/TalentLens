import { FiMenu } from "react-icons/fi";
import Analytics from "../pages/Analytics";
import Jobs from "../pages/Jobs";
export default function MainContent({ isopen, setisopen, analytics, jobs }: { isopen: boolean; setisopen: (isOpen: boolean) => void; analytics:boolean; jobs:boolean }) {
  return (
    <main className="flex-1">
      <header className="bg-black border-b px-6 py-4">
        {isopen ? (
          <h1 className="text-2xl font-semibold text-white">Welcome Back</h1>
        ) : (
          <FiMenu className="text-2xl cursor-pointer text-white" onClick={() => setisopen(!isopen)} />
        )}
      </header>

      <section className="p-6">
        {analytics && <Analytics/>}
        {jobs && <Jobs/>}
      </section>
    </main>
  );
}