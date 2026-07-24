import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-black">
              TalentLens
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              AI-powered resume analytics and insights.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition">
              Features
            </a>
            <a href="#" className="hover:text-black transition">
              Pricing
            </a>
            <a href="#" className="hover:text-black transition">
              About
            </a>
            <a href="#" className="hover:text-black transition">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4 text-xl text-gray-500">
            <a
              href="#"
              className="hover:text-black transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="hover:text-black transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="hover:text-black transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="hover:text-black transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TalentLens. All rights reserved.
        </div>
      </div>
    </footer>
  );
}