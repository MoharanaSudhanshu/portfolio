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
        relative isolate
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
        flex items-center
        py-12
        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================
          MOBILE PORTRAIT
          Positioned beside the name
      ====================================== */}
      <div
        className="
          absolute inset-0 -z-10
          overflow-hidden
          bg-[#050505]
          lg:hidden
        "
        aria-hidden="true"
      >
        <img
          src={profile}
          alt=""
          className="
            absolute
            right-[-7%]
            top-[28px]
            h-[280px]
            w-[52%]
            object-cover
            object-[65%_center]
            grayscale
            opacity-75
            sm:top-[35px]
            sm:h-[340px]
            sm:w-[48%]
          "
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 10%, black 70%, transparent 100%)",
          }}
        />

        {/* Keep text readable on the left */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/85
            to-[#050505]/15
          "
        />

        {/* Smooth bottom blend */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-transparent
            via-transparent
            to-[#050505]
          "
        />
      </div>

      {/* =====================================
          DESKTOP PORTRAIT
          Desktop styling kept separate
      ====================================== */}
      <div
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          -z-10 hidden
          w-[58%]
          overflow-hidden
          lg:block
        "
        aria-hidden="true"
      >
        <img
          src={profile}
          alt=""
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-[65%_center]
            grayscale
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#050505]
            via-[#050505]/30
            to-transparent
          "
        />

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-[#050505]/20
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* =====================================
          HERO CONTENT
      ====================================== */}
      <div
        className="
          relative mx-auto
          w-full max-w-[1500px]
          px-5
          sm:px-10
          lg:px-16
          xl:px-20
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative z-10
            w-full
            max-w-[560px]
            lg:max-w-[54%]
            xl:max-w-[620px]
          "
        >
          {/* INTRODUCTION */}
          <p
            className="
              mb-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-gray-400
              sm:mb-4
              sm:text-sm
              sm:tracking-[0.4em]
            "
          >
            Hello, I am
          </p>

          {/* NAME */}
          <h1
            className="
              font-serif
              font-medium
              tracking-[-0.045em]
              text-[clamp(2.3rem,8vw,3.4rem)]
              leading-[0.98]
              sm:text-6xl
              lg:text-[clamp(3.5rem,5vw,5.5rem)]
              xl:text-[5.8rem]
            "
          >
            Sudhanshu
            <br />
            Moharana
          </h1>

          {/* GOLD ACCENT */}
          <div
            className="
              mt-4 mb-3
              h-[3px] w-16
              bg-[#D9AE4D]
              sm:mt-6 sm:mb-4
              sm:w-20
            "
          />

          {/* PROFESSION */}
          <div
            className="
              min-h-[24px]
              text-sm
              font-semibold
              text-[#D9AE4D]
              sm:min-h-[30px]
              sm:text-lg
              lg:text-xl
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

          {/* DESCRIPTION */}
          <p
            className="
              mt-4
              max-w-[530px]
              text-[13px]
              leading-[1.8]
              text-gray-300
              sm:mt-5
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            Computer Science student at SUIIT Burla,
            passionate about building full-stack
            applications, exploring artificial
            intelligence, and creating scalable
            software solutions.
          </p>

          {/* ACTION BUTTONS */}
          <div
            className="
              mt-5
              flex flex-wrap
              items-center
              gap-3
              sm:mt-7
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
                min-h-11
                cursor-pointer
                items-center
                justify-center
                rounded-md
                bg-[#D9AE4D]
                px-4 py-2.5
                text-xs
                font-semibold
                text-black
                transition-colors
                hover:bg-[#E8C46C]
                sm:px-6
                sm:py-3
                sm:text-sm
                lg:text-base
              "
            >
              Explore My Work
            </Link>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download
              className="
                inline-flex
                min-h-11
                items-center
                justify-center
                rounded-md
                border
                border-[#D9AE4D]/70
                px-4 py-2.5
                text-xs
                font-medium
                text-[#D9AE4D]
                transition-colors
                hover:bg-[#D9AE4D]
                hover:text-black
                sm:px-6
                sm:py-3
                sm:text-sm
                lg:text-base
              "
            >
              Download Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            className="
              mt-6
              flex flex-wrap
              items-center
              gap-5
              text-lg
              text-gray-300
              sm:mt-8
              sm:gap-6
              sm:text-xl
              lg:text-2xl
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
                  transition-colors
                  duration-300
                  hover:text-[#D9AE4D]
                "
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
