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
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/MoharanaSudhanshu",
      label: "GitHub",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/sudhanshumoharana/",
      label: "LeetCode",
    },
    {
      icon: <SiHackerrank />,
      url: "https://www.hackerrank.com/profile/moharanasudhans1",
      label: "HackerRank",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sudhanshu-sekhar-moharana-518b85290/",
      label: "LinkedIn",
    },
    {
      icon: <SiInstagram />,
      url: "https://www.instagram.com/moharanasudhanshu/",
      label: "Instagram",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:moharanasudhanshu1@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="
        relative isolate flex min-h-screen items-center
        overflow-hidden bg-[#050505] text-white
        pt-24 pb-16
        sm:pt-28 sm:pb-12
        lg:pt-24 lg:pb-16
      "
    >
      {/* Background Portrait */}
      <div
        className="
          pointer-events-none absolute inset-y-0 right-0
          -z-10 w-full overflow-hidden
          lg:w-[52%]
        "
      >
        <img
          src={profile}
          alt=""
          aria-hidden="true"
          className="
            absolute right-0 top-0
            h-full w-full
            object-cover object-[65%_center]
            opacity-15 grayscale
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_70%,transparent_100%)]
            sm:opacity-25
            lg:opacity-75
            lg:[mask-image:linear-gradient(to_right,transparent_0%,black_30%,black_100%)]
          "
        />

        {/* Dark overlay for readability */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/85
            to-[#050505]/40
            lg:via-[#050505]/25
            lg:to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#050505]
            via-transparent
            to-[#050505]/20
            lg:from-transparent
          "
        />
      </div>

      {/* Main Container */}
      <div
        className="
          mx-auto w-full max-w-[1500px]
          px-5 sm:px-10 lg:px-16
        "
      >
        <div className="grid items-center lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl"
          >
            {/* Intro */}
            <p
              className="
                mb-5 text-xs font-medium uppercase
                tracking-[0.3em] text-gray-400
                sm:text-sm sm:tracking-[0.4em]
              "
            >
              Hello, I am
            </p>

            {/* Name */}
            <h1
              className="
                font-serif font-medium
                tracking-[-0.045em]
                text-[clamp(2.8rem,9.5vw,4rem)]
                leading-[0.98]
                sm:text-7xl
                lg:text-[clamp(5rem,7vw,7.5rem)]
              "
            >
              Sudhanshu
              <br />
              Moharana
            </h1>

            {/* Gold Divider */}
            <div
              className="
                mt-7 mb-5
                h-[3px] w-16 bg-[#D9AE4D]
                sm:w-20
              "
            />

            {/* Typing Animation */}
            <div
              className="
                min-h-[36px]
                text-base font-medium
                text-[#D9AE4D]
                sm:min-h-[40px] sm:text-xl
              "
            >
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "AI/ML Enthusiast",
                  2000,
                  "Software Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p
              className="
                mt-5 max-w-xl
                text-sm leading-7 text-gray-300
                sm:text-base sm:leading-8
                lg:text-lg
              "
            >
              Computer Science student at SUIIT Burla,
              passionate about building full-stack applications,
              exploring artificial intelligence, and creating
              scalable software solutions.
            </p>

            {/* Action Buttons */}
            <div
              className="
                mt-7 flex flex-col items-start gap-3
                min-[390px]:flex-row min-[390px]:flex-wrap
                sm:gap-4
              "
            >
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="
                  inline-flex cursor-pointer
                  items-center justify-center
                  rounded-md bg-[#D9AE4D]
                  px-4 py-3
                  text-sm font-semibold text-black
                  transition-colors duration-300
                  hover:bg-[#E8C46C]
                  min-[390px]:px-5
                  sm:px-7 sm:py-3.5 sm:text-base
                "
              >
                Explore My Work
              </Link>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="
                  inline-flex items-center justify-center
                  rounded-md
                  border border-[#D9AE4D]/60
                  px-4 py-3
                  text-sm font-medium text-[#D9AE4D]
                  transition-colors duration-300
                  hover:bg-[#D9AE4D]
                  hover:text-black
                  min-[390px]:px-5
                  sm:px-7 sm:py-3.5 sm:text-base
                "
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                mt-8 flex flex-wrap items-center
                gap-5 text-xl text-gray-400
                sm:gap-6 sm:text-2xl
              "
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  target={
                    social.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:text-[#D9AE4D]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Desktop Portrait Space */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
            aria-hidden="true"
          />
        </div>

        {/* Scroll Indicator */}
        <Link
          to="about"
          smooth
          duration={500}
          offset={-80}
          aria-label="Scroll to About section"
          className="
            absolute bottom-5 left-1/2
            -translate-x-1/2
            cursor-pointer text-2xl
            text-gray-500
            transition-colors
            hover:text-[#D9AE4D]
            sm:bottom-7
          "
        >
          ˅
        </Link>
      </div>
    </section>
  );
}

export default Hero;
