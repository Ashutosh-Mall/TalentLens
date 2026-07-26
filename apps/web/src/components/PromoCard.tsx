import { FiGithub, FiCode, FiArrowRight } from "react-icons/fi";

export default function PromoCard() {
  return (
    <div className="hidden md:block mt-8 rounded-xl bg-gray-100 p-5 text-black shadow-lg">
      <div className="flex items-center gap-2">
        <FiCode size={20} />
        <h3 className="font-semibold">Open Source Project</h3>
      </div>

      <p className="mt-3 text-sm text-black">
        Help improve the dashboard by contributing new features, fixing bugs,
        and improving the user experience.
      </p>

      <a
        href="https://github.com/Ashutosh-Mall/TalentLens"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
      >
        <FiGithub />
        Contribute
        <FiArrowRight />
      </a>
    </div>
  );
}