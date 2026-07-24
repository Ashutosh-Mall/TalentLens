import {useState} from "react";
import {
  FaHome,
  FaUser,
  FaInfoCircle,
  FaEnvelope,
  FaGithub,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navLinks = [
    {name: "Home", icon: <FaHome />, link: "/"},
    {name: "About", icon: <FaInfoCircle />, link: "/about"},
    {name: "Contact", icon: <FaEnvelope />, link: "/contact"},
    {name: "GitHub", icon: <FaGithub />, link: "https://github.com/Ashutosh-Mall/TalentLens"},
  ];

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-2xl font-bold text-black">
            Talent<span className="text-gray-500">Lens</span>
          </h1>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link}
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition duration-300 font-medium"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="hidden md:flex items-center gap-8">
            {isLoggedIn ? (
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition duration-300 font-medium"
                >
                  <FaUser />
                  <span>Profile</span>
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-gray-700 hover:text-black transition duration-300 font-medium"
                >
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>

          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="flex items-center gap-3 text-gray-700 hover:text-black cursor-pointer px-2 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                {link.icon}
                <span>{link.name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
