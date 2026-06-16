import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiDocker,
  SiTypescript,
} from "react-icons/si";

import { motion } from "framer-motion";

const frontend = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
];

const backend = [
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "MySQL", icon: <SiMysql size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
  { name: "TypeScript", icon: <SiTypescript size={40} /> },
];

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
      className="
        w-[140px]
        h-[150px]
        bg-[#111]
        border
        border-gray-800
        rounded-2xl
        flex
        flex-col
        items-center
        justify-center
        gap-4
        hover:border-yellow-500/50
        hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]
        transition-all
      "
    >
      <div className="text-yellow-500">{skill.icon}</div>

      <h3 className="font-semibold text-white text-center">{skill.name}</h3>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase">Skills</h2>

          <div className="w-28 h-1 bg-yellow-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6">
            Technologies and tools I've mastered throughout my journey.
          </p>
        </div>

        {/* Frontend */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10">Front-end</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {frontend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-10">Back-end</h3>

          <div className="flex flex-wrap justify-center gap-6">
            {backend.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Misc */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            Miscellaneous
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
