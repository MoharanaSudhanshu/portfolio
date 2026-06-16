import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const timelineData = [
{
title: "Bachelor of Technology (CSE)",
place:
"Sambalpur University Institute of Information Technology, Burla",
duration: "2023 - 2027",
description:
"Pursuing B.Tech in Computer Science & Engineering with interests in Full Stack Development, Artificial Intelligence, Software Engineering, and Data Structures & Algorithms.",
side: "right",
},
{
title: "Higher Secondary Education",
place: "M.G.M. English School, Rourkela",
duration: "2021 - 2023",
description:
"Completed Higher Secondary education with Science stream, building a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
side: "left",
},
{
title: "Secondary Education",
place: "M.G.M. English School, Rourkela",
duration: "2020 - 2021",
description:
"Completed secondary education with excellent academic performance and active participation in technical and extracurricular activities.",
side: "right",
},
];

function Education() {
return ( <section id="education" className="py-24 px-6"> <div className="max-w-7xl mx-auto">


    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wide">
        Education
      </h2>

      <div className="flex justify-center mt-6">
        <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]">
          <GraduationCap size={28} className="text-black" />
        </div>
      </div>

      <p className="text-gray-400 mt-6 text-lg">
        My academic journey and learning milestones
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">

      {/* Center Line */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-700 -translate-x-1/2"></div>

      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`relative flex mb-20 ${
            item.side === "left"
              ? "md:justify-start"
              : "md:justify-end"
          }`}
        >
          {/* Timeline Icon */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-20">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center border-4 border-black">
              <GraduationCap size={20} className="text-black" />
            </div>
          </div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="
              w-full
              md:w-[45%]
              bg-[#0f0f0f]
              border
              border-gray-800
              rounded-3xl
              p-8
              hover:border-yellow-500/40
              transition-all
              <duration-3000></duration-3000>
            "
          >
            <span className="text-yellow-500 font-semibold text-sm uppercase tracking-wider">
              {item.duration}
            </span>

            <h3 className="text-2xl font-bold mt-3">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.place}
            </p>

            <p className="text-gray-300 mt-5 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</section>


);
}

export default Education;
