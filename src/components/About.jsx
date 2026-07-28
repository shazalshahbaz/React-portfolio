import { motion } from "framer-motion";
import AboutImage from "../assets/image/about.png";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaDownload,
} from "react-icons/fa";

import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* Left Side */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <div className="about-image">
            <img src={AboutImage} alt="Shazal Shahbaz" />
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <span className="section-title">
            About Me
          </span>

          <h2>
            Frontend Developer <span>React JS</span>
          </h2>

          <p>
            I'm a passionate Frontend Developer who enjoys creating
            beautiful, responsive and modern websites.

            I focus on writing clean code, building premium UI,
            and creating smooth user experiences.

            Currently I'm improving my React JS skills and
            building real-world projects to become a professional
            Frontend Engineer.
          </p>

          {/* Cards */}

          <div className="about-cards">

            <div className="about-card">
              <FaReact />
              <h3>React</h3>
              <p>Modern Component Based UI</p>
            </div>

            <div className="about-card">
              <FaCode />
              <h3>Clean Code</h3>
              <p>Readable & Scalable Code</p>
            </div>

            <div className="about-card">
              <FaLaptopCode />
              <h3>Responsive</h3>
              <p>Mobile Friendly Design</p>
            </div>

            <div className="about-card">
              <FaRocket />
              <h3>Performance</h3>
              <p>Fast & Optimized Websites</p>
            </div>

          </div>

          {/* Stats */}

          <div className="about-stats">

            <div>
              <h3>15+</h3>
              <span>Projects</span>
            </div>

            <div>
              <h3>100%</h3>
              <span>Passion</span>
            </div>

            <div>
              <h3>24/7</h3>
              <span>Learning</span>
            </div>

          </div>

          <button className="about-btn">

            Download CV

            <FaDownload />

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default About;