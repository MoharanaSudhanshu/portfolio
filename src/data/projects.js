import driveEase from "../assets/images/projects/driveease.png";
import protectscan from "../assets/images/projects/protectscan.png";
import heartDisease from "../assets/images/projects/heart-disease.png";
import craftedByMoharana from "../assets/images/projects/craftedbymoharana.png";

const projects = [
  {
    title: "DriveEase",
    category: "MERN",
    image: driveEase,
    description:
      "Full-stack car rental management platform with authentication, vehicle booking, admin dashboard, payment integration, and user management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/MoharanaSudhanshu/driveease",
    live: "https://driveease-one.vercel.app",
  },

  {
    title: "PROTECTSCAN",
    category: "AI",
    image: protectscan,
    description:
      "AI-powered breast cancer detection framework using CNN, ResNet, EfficientNet, Grad-CAM visualization, and AES-256 encryption.",
    tech: ["Python", "CNN", "ResNet", "EfficientNet", "Deep Learning"],
    github: "https://github.com/MoharanaSudhanshu/PROTECTSCAN",
    live: "https://moharanasudhanshu.github.io/PROTECTSCAN/",
  },

  {
    title: "Heart Disease Prediction",
    category: "AI",
    image: heartDisease,
    description:
      "Machine learning system achieving 92% prediction accuracy using Logistic Regression and Random Forest algorithms.",
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
    category: "Web",
    image: craftedByMoharana,
    description:
      "Responsive artisan marketplace website showcasing handcrafted products with multilingual support.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    github: "https://github.com/MoharanaSudhanshu/craftedbymoharana",
    live: "https://moharanasudhanshu.github.io/craftedbymoharana/",
  },
];

export default projects;
