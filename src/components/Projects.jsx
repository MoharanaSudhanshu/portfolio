import { motion } from "framer-motion";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase">
            Projects
          </h2>

          <div className="w-32 h-1 bg-yellow-500 mx-auto mt-4"></div>

          <p className="text-gray-400 mt-6">
            Featured projects showcasing my skills in Full Stack Development,
            Artificial Intelligence, and Software Engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
              group
                bg-[#111]
                border
                border-gray-800
                rounded-3xl
                overflow-hidden
                hover:border-yellow-500/40
                transition-all
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <span className="text-yellow-500 text-sm font-semibold">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

                <p className="text-gray-400 mt-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-yellow-500/10
                        text-yellow-500
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      border
                      border-yellow-500
                      rounded-lg
                      hover:bg-yellow-500
                      hover:text-black
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2
                      bg-yellow-500
                      text-black
                      rounded-lg
                      hover:bg-yellow-400
                      transition
                    "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;