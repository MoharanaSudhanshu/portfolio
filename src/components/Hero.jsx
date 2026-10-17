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
        relative min-h-screen overflow-hidden
        bg-[#050505] text-white
        flex items-center
        pt-24 pb-12
        sm:pt-28
        lg:pt-24 lg:pb-16
      "
    >
      {/* Subtle Gold Background Glow */}
      <div
        className="
          pointer-events-none absolute
          -right-32 top-1/4
          h-80 w-80 rounded-full
          bg-[#D9AE4D]/5 blur-[100px]
        "
      />

      {/* Main Container */}
      <div
        className="
          relative mx-auto w-full max-w-[1400px]
          px-5 sm:px-10 lg:px-16
        "
      >
        <div
          className="
            grid items-center gap-10
            lg:grid-cols-2 lg:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 order-1"
          >
            {/* Introduction */}
            <p
              className="
                mb-5
                text-xs font-medium uppercase
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
                text-[clamp(2.65rem,9vw,4rem)]
                leading-[1.02]
                sm:text-7xl
                lg:text-[clamp(4rem,5.5vw,6rem)]
              "
            >
              Sudhanshu
              <br />
              Moharana
            </h1>

            {/* Gold Divider */}
            <div
              className="
                mt-6 mb-5
                h-[3px] w-16
                bg-[#D9AE4D]
                sm:w-20
              "
            />

            {/* Typing Animation */}
            <div
              className="
                min-h-[32px]
                text-base font-medium
                text-[#D9AE4D]
                sm:min-h-[38px] sm:text-xl
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

            {/* Action Buttons */}
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
                  inline-flex cursor-pointer
                  items-center justify-center
                  rounded-md
                  bg-[#D9AE4D]
                  px-4 py-3
                  text-sm font-semibold
                  text-black
                  transition-colors duration-300
                  hover:bg-[#E8C46C]
                  sm:px-6 sm:py-3.5
                  sm:text-base
                "
              >
                Explore My Work
              </Link>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="
                  inline-flex items-center
                  justify-center
                  rounded-md
                  border border-[#D9AE4D]/60
                  px-4 py-3
                  text-sm font-medium
                  text-[#D9AE4D]
                  transition-colors duration-300
                  hover:bg-[#D9AE4D]
                  hover:text-black
                  sm:px-6 sm:py-3.5
                  sm:text-base
                "
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div
              className="
                mt-8 flex flex-wrap
                items-center gap-5
                text-xl text-gray-400
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

          {/* RIGHT PORTRAIT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              relative order-2
              mx-auto w-full max-w-[230px]
              sm:max-w-[280px]
              lg:max-w-[390px]
            "
          >
            {/* Soft Gold Glow */}
            <div
              className="
                absolute inset-0
                rounded-2xl
                bg-[#D9AE4D]/10
                blur-3xl
              "
            />

            {/* Portrait */}
            <img
              src={profile}
              alt="Sudhanshu Moharana"
              className="
                relative z-10
                aspect-[4/5] w-full
                rounded-2xl
                border border-[#D9AE4D]/20
                object-cover object-top
                grayscale
                shadow-[0_0_30px_rgba(217,174,77,0.08)]
                transition-transform duration-500
                hover:scale-[1.02]
              "
            />

            {/* Decorative Gold Line */}
            <div
              className="
                absolute -bottom-3 -right-3
                h-16 w-16
                rounded-br-2xl
                border-b-2 border-r-2
                border-[#D9AE4D]/60
              "
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          aria-label="Scroll to About section"
          className="
            absolute bottom-0 left-1/2
            hidden -translate-x-1/2
            cursor-pointer
            text-2xl text-gray-500
            transition-colors
            hover:text-[#D9AE4D]
            sm:block
          "
        >
          ˅
        </Link>
      </div>
    </section>
  );
}

export default Hero;
