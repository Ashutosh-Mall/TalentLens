import {FiUsers} from "react-icons/fi";
import Scroll from "../components/Scroll";
import HeroCard from "../components/HeroCard";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <div className="min-h-screen bg-white bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] bg-[size:18px_18px]">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="flex items-center gap-2 mb-6 px-4 py-2 border border-gray-200 rounded-full bg-white shadow-sm">
          <FiUsers />
          <span className="text-sm md:text-base text-gray-600">
            200k+ Active Users
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          One platform to discover
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          talent and build teams
        </h1>

        <p className="max-w-xl md:max-w-2xl text-base md:text-lg text-gray-600 mb-8">
          TalentLens helps recruiters and organizations identify skilled
          candidates faster, providing data-driven insights to make confident
          hiring decisions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800">
            Get Started
          </button>

          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <motion.div className="w-full lg:flex-1 lg:ml-10" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
          <HeroCard />
        </motion.div>

        <div className="hidden lg:block lg:flex-[2]">
          <Scroll />
        </div>
      </div>
      <Faq/>
      <Footer/>
    </div>
  );
}
