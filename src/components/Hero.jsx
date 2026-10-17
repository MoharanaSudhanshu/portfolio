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
        relative isolate min-h-screen overflow-hidden
        bg-[#050505] text-white
        flex items-center
        pt-28 pb-12
        sm:pt-32
        lg:pt-24 lg:pb-16
      "
    >
      {/* Mobile portrait background */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          lg:hidden
        "
        aria-hidden="true"
      >
        <img
          src={profile}
          alt=""
          className="
            absolute right-0 top-0
            h-full w-[78%]
            object-cover object-top
            grayscale
            opacity-[0.23]
          "
        />

        {/* Fade the image into the black background */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#050505] via-[#050505]/75
            to-[#050505]/25
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#050505]
            via-transparent
            to-[#050505]/30
          "
        />
      </div>

      {/* Desktop background glow */}
      <div
        className="
          pointer-events-none absolute
          right-0 top-1/4 -z-10
          hidden h-96 w-96
          rounded-full bg-[#D9AE4D]/5
          blur-[100px] lg:block
        "
      />

      <div
        className="
          mx-auto w-full max-w-[1400px]
          px-5 sm:px-10 lg:px-16
        "
      >
        <div
          className="
            grid items-center
            lg:grid-cols-2 lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              relative z-10
              max-w-2xl
            "
          >
            <p
              className="
                mb-5
                text-xs font-medium uppercase
                tracking-[0.3em]
                text-gray-400
                sm:text-sm sm:tracking-[0.4em]
              "
            >
              Hello, I am
            </p>

            <h1
              className="
                font-serif font-medium
                tracking-[-0.045em]
                text-[clamp(2.8rem,10vw,4rem)]
                leading-[0.98]
                sm:text-7xl
                lg:text-[clamp(4rem,5.5vw,6rem)]
              "
            >
              Sudhanshu
              <br />
              Moharana
            </h1>

            {/* Gold divider */}
            <div
              className="
                mt-6 mb-5
                h-[3px] w-16
                bg-[#D9AE4D]
                sm:w-20
              "
            />

            {/* Animated designation */}
            <div
              className="
                min-h-[30px]
                text-base font-medium
                text-[#D9AE4D]
                sm:min-h-[36px] sm:text-xl
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

            {/* Introduction */}
            <p
              className="
                mt-5 max-w-xl
                text-sm leading-7
                text-gray-300
                sm:text-base sm:leading-8
                lg:text-lg
              "
            >
              Computer Science student at SUIIT Burla,
              passionate about building full-stack
              applications, exploring artificial
              intelligence, and creating scalable
              software solutions.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7 flex flex-wrap
                items-center gap-3
                sm:gap-4
              "
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="
                  inline-flex min-h-12
                  cursor-pointer items-center
                  justify-center rounded-md
                  bg-[#D9AE4D]
                  px-4 py-3
                  text-sm font-semibold
                  text-black
                  transition-colors
                  hover:bg-[#E8C46C]
                  sm:px-6 sm:text-base
                "
              >
                Explore My Work
              </Link>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="
                  inline-flex min-h-12
                  items-center justify-center
                  rounded-md
                  border border-[#D9AE4D]/60
                  px-4 py-3
                  text-sm font-medium
                  text-[#D9AE4D]
                  transition-colors
                  hover:bg-[#D9AE4D]
                  hover:text-black
                  sm:px-6 sm:text-base
                "
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div
              className="
                mt-8 flex flex-wrap
                items-center gap-5
                text-xl text-gray-300
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
                    transition-colors duration-300
                    hover:text-[#D9AE4D]
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* DESKTOP PORTRAIT ONLY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              relative mx-auto
              hidden w-full max-w-[390px]
              lg:block
            "
          >
            <img
              src={profile}
              alt="Sudhanshu Moharana"
              className="
                relative z-10
                aspect-[4/5] w-full
                object-cover object-top
                grayscale
              "
            />

            {/* Subtle accent */}
            <div
              className="
                absolute -bottom-3 -right-3
                h-16 w-16
                border-b-2 border-r-2
                border-[#D9AE4D]/60
              "
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          aria-label="Scroll to About section"
          className="
            mt-12 block
            cursor-pointer text-center
            text-2xl text-gray-500
            transition-colors
            hover:text-[#D9AE4D]
            lg:hidden
          "
        >
          ˅
        </Link>
      </div>
    </section>
  );
}

export default Hero;
