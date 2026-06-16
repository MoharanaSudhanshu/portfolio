import { motion } from "framer-motion";

const certifications = [
  {
    title: "Postman API Fundamentals",
    issuer: "Postman",
    year: "2025",
  },
  {
    title: "Web Development Certification",
    issuer: "Udemy / Coursera",
    year: "2025",
  },
  {
    title: "Machine Learning Certification",
    issuer: "Coursera",
    year: "2025",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Certifications</h2>

          <p className="text-gray-400 mt-4">
            Courses and certifications I've completed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              whileHover={{ y: -10 }}
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
              <h3 className="text-xl font-bold">{cert.title}</h3>

              <p className="text-yellow-500 mt-3">{cert.issuer}</p>

              <p className="text-gray-400 mt-2">{cert.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
