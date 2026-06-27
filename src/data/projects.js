import pdfChat from "../assets/images/projects/DocuMind-AI.png";
import protectscan from "../assets/images/projects/protectscan.png";
import driveEase from "../assets/images/projects/driveease.png";
import heartDisease from "../assets/images/projects/heart-disease.png";
import craftedByMoharana from "../assets/images/projects/craftedbymoharana.png";

const projects = [
  {
    title: "DocuMind AI",
    category: "AI / Full Stack",
    image: pdfChat,
    description:
      "AI-powered PDF chatbot that allows users to upload documents and ask questions using Retrieval-Augmented Generation (RAG), delivering accurate, context-aware responses with a modern chat interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "LangChain", "Gemini API"],
    github: "https://github.com/MoharanaSudhanshu/DocuMind-AI", 
    live: "https://docu-mind-ai-eight-gilt.vercel.app/", 
  },

  {
    title: "PROTECTSCAN",
    category: "AI",
    image: protectscan,
    description:
      "Privacy-focused breast cancer detection framework using CNN, ResNet, EfficientNet, Grad-CAM visualization, and AES-256 encryption for secure AI-assisted diagnosis.",
    tech: [
      "Python",
      "TensorFlow",
      "CNN",
      "ResNet",
      "EfficientNet",
      "Deep Learning",
    ],
    github: "https://github.com/MoharanaSudhanshu/PROTECTSCAN",
    live: "https://moharanasudhanshu.github.io/PROTECTSCAN/",
  },

  {
    title: "DriveEase",
    category: "MERN",
    image: driveEase,
    description:
      "Full-stack MERN car rental platform featuring JWT authentication, vehicle booking, payment integration, admin dashboard, and complete rental management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/MoharanaSudhanshu/driveease",
    live: "https://driveease-one.vercel.app",
  },

  {
    title: "Heart Disease Prediction",
    category: "Machine Learning",
    image: heartDisease,
    description:
      "Machine learning application achieving 92% prediction accuracy using Logistic Regression and Random Forest with an interactive Flask-based web interface.",
    tech: [
      "Python",
      "Machine Learning",
      "Flask",
      "Random Forest",
      "Logistic Regression",
    ],
    github: "https://github.com/MoharanaSudhanshu/Heart-Disease-Prediction",
    live: "https://github.com/MoharanaSudhanshu/Heart-Disease-Prediction",
  },

  {
    title: "CraftedByMoharana",
    category: "Frontend",
    image: craftedByMoharana,
    description:
      "Responsive website showcasing Odisha's Moharana artisan heritage with modern UI, smooth navigation, and mobile-first design.",
    tech: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/MoharanaSudhanshu/craftedbymoharana",
    live: "https://moharanasudhanshu.github.io/craftedbymoharana/",
  },
];

export default projects;
