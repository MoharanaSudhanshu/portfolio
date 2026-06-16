import { motion } from "framer-motion";

const stats = [
  { number: "10+", title: "Projects" },
  { number: "3+", title: "Years Learning" },
  { number: "3+", title: "Hackathons" },
  { number: "100+", title: "DSA Problems" },
];

function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Hey, I'm{" "}
            <span className="text-yellow-500 font-semibold">Sudhanshu</span> — a
            Full Stack Developer and passionate problem-solver who believes
            technology is more than just writing code. For me, every challenge
            is an opportunity to learn, every project is a chance to create
            impact, and every line of code contributes to building something
            meaningful.
            <br />
            <br />
            I enjoy developing scalable web applications, designing intuitive
            user experiences, and exploring the possibilities of Artificial
            Intelligence. Whether it's crafting responsive frontends, building
            robust backend systems, or integrating intelligent solutions, I'm
            driven by the process of turning ideas into reality.
            <br />
            <br />
            As a Computer Science student and aspiring Software Engineer, I'm
            constantly learning, experimenting, and pushing my limits to build
            better software. I value clean code, thoughtful design, and
            solutions that are not only functional but also efficient and
            user-focused.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -8 }}
              className="bg-[#121212] border border-gray-800 rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-yellow-500">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-400">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
