import { motion } from "framer-motion";

const achievements = [
  {
    title: "10+ Projects Built",
  },
  {
    title: "Code-o-Olympics Participant",
  },
  {
    title: "100+ DSA Problems Solved",
  },
  {
    title: "AI & MERN Projects",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Achievements</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="
bg-[#0f0f0f]
border border-gray-800
rounded-3xl
p-6
transition-all
duration-300
hover:border-yellow-500/40
hover:-translate-y-2
"
            >
              <h3 className="font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
