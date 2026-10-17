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
  return (
    <section
      id="home"
      className="
        relative isolate
        min-h-screen
        overflow-hidden
        bg-[#0b0b0b]
        text-white
        flex items-center
        pt-24 pb-12
        md:pt-20 md:pb-16
      "
    >
      {/* Background Portrait */}
<div
  className="
    absolute
    inset-x-0
    top-[42px]
    h-[470px]
    overflow-hidden
    pointer-events-none
    -z-10

    sm:top-[50px]
    sm:h-[510px]

    md:inset-y-0
    md:left-auto
    md:right-0
    md:top-0
    md:h-full
    md:w-[52%]
  "
>
  <img
    src={profile}
    alt="Sudhanshu Moharana"
    className="
      absolute
      right-0
      top-0
      h-full
      w-[72%]
      object-cover
      object-[65%_top]
      grayscale

      sm:w-[65%]

      md:w-full
      md:object-[65%_center]
      md:brightness-125
      md:contrast-110
    "
  />

  {/* Mobile: retain the bottom fade */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-[#0b0b0b]/10
      via-transparent
      to-[#0b0b0b]
      md:hidden
    "
  />

  {/* Desktop: blend only the left edge, not the face */}
  <div
    className="
      absolute
      inset-0
      hidden
      md:block
      bg-gradient-to-r
      from-[#0b0b0b]
      via-[#0b0b0b]/25
      to-transparent
    "
  />
</div>

      {/* Hero Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-10
        "
      >
        <div className="max-w-3xl">

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              text-gray-400
              text-xs
              sm:text-sm
              md:text-base
              font-semibold
              tracking-[0.3em]
              uppercase
              mb-5
            "
          >
            Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              font-serif
              font-medium
              text-white
              text-[clamp(2.3rem,7vw,5.8rem)]
              leading-[0.98]
              tracking-[-0.045em]
            "
          >
            Sudhanshu
            <br />
            Moharana
          </motion.h1>

          {/* Gold Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 118 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              h-[5px]
              bg-[#d4af55]
              mt-7
              mb-6
            "
          />

          {/* Animated Designation */}
          <div
            className="
              min-h-[30px]
              text-[#d4af55]
              text-base
              sm:text-lg
              md:text-2xl
              font-semibold
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
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              mt-6
              max-w-2xl
              text-gray-300
              text-sm
              sm:text-base
              md:text-lg
              leading-7
              sm:leading-8
            "
          >
            Hey, I'm Sudhanshu — a Software Engineer and passionate problem-solver who sees code as more than syntax. For me, every bug is a riddle, every feature a challenge, and every project a chance to build something smarter, cleaner, and faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              mt-7
              flex
              flex-wrap
              gap-3
              sm:gap-4
            "
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="
                inline-flex
                items-center
                justify-center
                cursor-pointer
                rounded-lg
                bg-[#d4af55]
                px-4
                py-3
                text-sm
                font-semibold
                text-black
                transition
                hover:bg-[#f4c95d]

                sm:px-7
                sm:py-4
                sm:text-base
              "
            >
              Explore My Work
            </Link>

            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                justify-center
                rounded-lg
                border
                border-[#8d7541]
                px-4
                py-3
                text-sm
                font-semibold
                text-[#d4af55]
                transition
                hover:bg-[#d4af55]
                hover:text-black

                sm:px-7
                sm:py-4
                sm:text-base
              "
            >
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              mt-7
              flex
              flex-wrap
              items-center
              gap-5
              text-xl
              text-gray-300

              sm:gap-7
              sm:text-2xl
            "
          >
            <a
              href="https://github.com/MoharanaSudhanshu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-[#d4af55]"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/sudhanshumoharana/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="transition hover:text-[#d4af55]"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.hackerrank.com/profile/moharanasudhans1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HackerRank"
              className="transition hover:text-[#d4af55]"
            >
              <SiHackerrank />
            </a>

            <a
              href="https://www.linkedin.com/in/sudhanshu-sekhar-moharana-518b85290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-[#d4af55]"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/moharanasudhanshu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition hover:text-[#d4af55]"
            >
              <SiInstagram />
            </a>

            <a
              href="mailto:moharanasudhanshu1@gmail.com"
              aria-label="Email"
              className="transition hover:text-[#d4af55]"
            >
              <FaEnvelope />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
