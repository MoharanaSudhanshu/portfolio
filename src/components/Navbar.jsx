import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "home",
    "about",
    "projects",
    "skills",
    "education",
    "contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <h1 className="text-2xl font-bold text-yellow-500">Sudhanshu</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer capitalize hover:text-yellow-500 transition duration-300"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <a
          href="/public/resume.pdf"
          download
          className="hidden md:block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block py-3 border-b border-gray-800 capitalize cursor-pointer hover:text-yellow-500 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
