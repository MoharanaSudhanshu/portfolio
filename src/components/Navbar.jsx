
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

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-2xl font-bold tracking-tight text-white"
        >
          sudhanshu<span className="text-[#D9AE4D]">.</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="!text-[#D9AE4D] after:scale-x-100"
                className="relative cursor-pointer py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-gray-400 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#D9AE4D] after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        /* {/* Resume */}
        <a
          href={resumeUrl}
          download
          className="hidden rounded-md bg-[#D9AE4D] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#E8C46C] md:block"
        >
          Resume
        </a> */

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-white transition hover:text-[#D9AE4D] md:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#080808] px-6 py-4 shadow-xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link}
              to={link}
              smooth
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block cursor-pointer border-b border-white/5 py-3 text-xs uppercase tracking-[0.16em] text-gray-400 transition hover:text-[#D9AE4D]"
            >
              {link}
            </Link>
          ))}

          <a
            href={resumeUrl}
            download
            onClick={() => setIsOpen(false)}
            className="mt-5 inline-block rounded-md bg-[#D9AE4D] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E8C46C]"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
