import HeroChart from "./HeroChart";
import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <section className="w-full flex items-center justify-center px-4 py-8 sm:px-6">
      <motion.div
        className="w-full max-w-6xl bg-white border border-gray-200 rounded-3xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side */}
          <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
              Resume Analytics
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Turn your resume into actionable insights.
            </h1>

            <p className="mt-5 text-gray-600 text-base lg:text-lg max-w-md">
              Discover strengths, identify skill gaps, and improve
              your resume with AI-powered analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-3 rounded-xl bg-black text-white text-sm font-medium">
                68% Match Score
              </div>

              <div className="px-4 py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium">
                ATS Friendly
              </div>

              <div className="px-4 py-3 rounded-xl bg-gray-100 text-gray-700 text-sm font-medium">
                12 Skills Found
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l border-gray-200 p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center">
            <HeroChart />

            <p className="mt-6 text-center text-sm sm:text-base text-gray-600 max-w-sm">
              Analyze skill matching, identify missing requirements,
              and improve your chances with data-driven feedback.
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
}