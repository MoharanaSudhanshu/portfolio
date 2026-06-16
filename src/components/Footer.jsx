import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import footerBg from "../assets/images/footer.jpg";
import character from "../assets/images/character.png";
import madeWithLove from "../assets/images/made-with-love.png";

function Footer() {
  return (
    <footer className="relative w-full min-h-[320px] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">
        {/* Main Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="text-center md:text-left">
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mb-5 mt-40 ">
              <a
                href="https://github.com/MoharanaSudhanshu"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  flex items-center 
                  justify-center
                  rounded-full
                  border border-gray-700
                  hover:border-yellow-500
                  hover:text-yellow-500
                  hover:scale-105 
                  transition-all duration-500
                  
                  
                "
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/sudhanshu-sekhar-moharana-518b85290/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  border border-gray-700
                  hover:border-yellow-500
                  hover:text-yellow-500
                  transition-all duration-300
                  hover:scale-105 
                  transition-all duration-500
                "
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:moharanasudhanshu1@gmail.com"
                className="
                  w-12 h-12
                  flex items-center
                   justify-center
                  rounded-full
                  border border-gray-700
                  hover:border-yellow-500
                  hover:text-yellow-500
                  hover:scale-105 
                  transition-all duration-500

                "
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            <h3
              className="font-bold uppercase text-sm md:text-base hover:scale-105
              transition-all duration-500"
            >
              © 2026 Sudhanshu Moharana. All Rights Reserved.
            </h3>

            <p className="text-gray-400 mt-2">
              Building digital experiences that inspire.
            </p>
          </div>

          {/* Character */}
          <div className="mt-4 md:mt-40">
            <img
              src={character}
              alt="Developer"
              className="
                w-25
                md:w-35
                lg:w-35
                object-contain
                
              "
            />
          </div>
        </div>

        {/* Made With Love Image */}
        <div className="flex justify-center -mt-4 md:mt">
          <img
            src={madeWithLove}
            alt="Made With Love By Sudhanshu"
            className="
              w-[180px]
              md:w-[240px]
              lg:w-[280px]
              object-contain
              hover:scale-105
              transition-all duration-500
            "
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
