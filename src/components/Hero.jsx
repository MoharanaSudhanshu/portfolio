
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiHackerrank,
  SiInstagram,
  SiLeetcode,
} from "react-icons/si";

import profile from "../assets/images/profile.png";

function Hero() {
  const socials = [
    {
      href: "https://github.com/MoharanaSudhanshu",
      label: "GitHub",
      icon: <FaGithub />,
    },
    {
      href: "https://leetcode.com/u/sudhanshumoharana/",
      label: "LeetCode",
      icon: <SiLeetcode />,
    },
    {
      href: "https://www.hackerrank.com/profile/moharanasudhans1",
      label: "HackerRank",
      icon: <SiHackerrank />,
    },
    {
      href: "https://www.linkedin.com/in/sudhanshu-sekhar-moharana-518b85290/",
      label: "LinkedIn",
      icon: <FaLinkedin />,
    },
    {
      href: "https://www.instagram.com/moharanasudhanshu/",
      label: "Instagram",
      icon: <SiInstagram />,
    },
    {
      href: "mailto:moharanasudhanshu1@gmail.com",
      label: "Email",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-6 sm:px-6 lg:px-10"
    >
      <div className="relative isolate w-full max-w-[1500px] min-h-[680px] overflow-hidden rounded-2xl bg-[#050505] text-white lg:h-[82vh] lg:min-h-[680px]">

        {/* Subtle lighting behind portrait */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-full sm:w-[70%] lg:w-[53%]">
          <motion.img
            src={profile}
            alt="Sudhanshu Moharana"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 0.78, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover object-top grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/65 to-[#050505]/10 sm:via-[#050505]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-[#050505]/10" />
        </div>

        {/* Hero content — main navigation is handled by Navbar.jsx */}
        <div className="relative z-10 flex min-h-[680px] items-center px-6 pb-20 pt-16 sm:px-10 lg:min-h-0 lg:h-full lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full max-w-[700px]"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.32em] text-gray-400 sm:text-sm">
              Hello, I am
            </p>

            <h1 className="font-serif text-[clamp(3.2rem,7vw,6.8rem)] leading-[0.88] tracking-[-0.045em]">
              Sudhanshu
              <br />
              Moharana
            </h1>

            <div className="mt-6 h-[2px] w-12 bg-[#D9AE4D]" />

            <div className="mt-4 min-h-7 text-sm tracking-wide text-[#D9AE4D] sm:text-base md:text-lg">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "AI Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              Computer Science student at SUIIT Burla, passionate about
              building full-stack applications, exploring artificial
              intelligence, and creating scalable software solutions.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer rounded-md bg-[#D9AE4D] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#E8C46C]"
              >
                Explore My Work
              </Link>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="rounded-md border border-[#D9AE4D]/60 px-5 py-3 text-sm text-[#D9AE4D] transition hover:bg-[#D9AE4D] hover:text-black"
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-7 flex flex-wrap items-center gap-5 text-lg text-gray-400">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="transition hover:-translate-y-1 hover:text-[#D9AE4D]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <Link
          to="about"
          smooth
          duration={500}
          offset={-80}
          aria-label="Scroll to About"
          className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 cursor-pointer text-3xl font-light text-gray-500 transition hover:text-[#D9AE4D]"
        >
          ⌄
        </Link>
      </div>
    </section>
  );
}

export default Hero;
