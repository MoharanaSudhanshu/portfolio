import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiHackerrank, SiInstagram, SiLeetcode } from "react-icons/si";

import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      {" "}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-yellow-500 text-lg mb-4">Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sudhanshu
            <br />
            Moharana
          </h1>

          <div className="text-2xl md:text-4xl mt-4 font-semibold">
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
              speed={50}
              repeat={Infinity}
              className="text-yellow-500"
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
            B.Tech Computer Science student at SUIIT Burla, passionate about
            Full Stack Development, Artificial Intelligence, and building
            scalable software solutions that solve real-world problems.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3 mt-6">
            {["React", "Node.js", "MongoDB", "Express", "Python", "AI/ML"].map(
              (tech) => (
                <span
                  key={tech}
                  className="
              px-4
              py-2
              rounded-full
              bg-yellow-500/10
              border
              border-yellow-500/20
              text-sm
            "
                >
                  {tech}
                </span>
              ),
            )}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="
            cursor-pointer
            bg-yellow-500
            text-black
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-yellow-400
            transition
          "
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download
              className="
            border
            border-yellow-500
            text-yellow-500
            px-6
            py-3
            rounded-lg
            hover:bg-yellow-500
            hover:text-black
            transition
          "
            >
              Download Resume
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div>
              <h3 className="text-2xl font-bold text-yellow-500">8.62</h3>
              <p className="text-gray-400 text-sm">CGPA</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">3</h3>
              <p className="text-gray-400 text-sm">Internships</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">4+</h3>
              <p className="text-gray-400 text-sm">Major Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-yellow-500">10+</h3>
              <p className="text-gray-400 text-sm">Achievements</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 mt-10 text-2xl">
            <a
              href="https://github.com/MoharanaSudhanshu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://leetcode.com/u/sudhanshumoharana/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.hackerrank.com/profile/moharanasudhans1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <SiHackerrank />
            </a>
            <a
              href="https://www.linkedin.com/in/sudhanshu-sekhar-moharana-518b85290/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/moharanasudhanshu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              <SiInstagram />
            </a>
            <a
              href="mailto:moharanasudhanshu1@gmail.com"
              className="hover:text-yellow-500 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500/10 blur-[120px] rounded-full"></div>

            <img
              src={profile}
              alt="Sudhanshu Moharana"
              className="
            relative
            w-[320px]
            md:w-[450px]
            lg:w-[500px]
            rounded-3xl
            object-cover
            border
            border-yellow-500/20
            shadow-[0_0_50px_rgba(212,175,55,0.2)]
            hover:scale-105
            transition-all
            duration-500
          "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
