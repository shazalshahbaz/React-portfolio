import { motion } from "framer-motion";
import HeroImage from "../assets/image/hero.png";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import "../styles/Hero.css";


const Hero = () => {
  return (
    <section id="home" className="hero">

      {/* Background */}

      <div className="hero-bg">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <span className="circle circle3"></span>
      </div>

      <div className="hero-container">

        {/* Left */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="hero-small">
            👋 Hello, I'm
          </p>

          <h1>
            Shazal <span>Shahbaz</span>
          </h1>

          <h2>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "JavaScript Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="hero-description">
            I build beautiful, modern and responsive websites using
            React.js, JavaScript, HTML and CSS.

            My goal is to create premium user experiences with clean
            code, smooth animations and modern UI design.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Hire Me
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              Download CV
              <FaDownload />
            </button>

          </div>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: .7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .9 }}
        >

          <div className="profile-card">

            <div className="profile-ring"></div>

            <img
              src={HeroImage}
              alt="Shazal Shahbaz"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        className="scroll-down"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        ↓ Scroll Down
      </motion.div>

    </section>
  );
};

export default Hero;