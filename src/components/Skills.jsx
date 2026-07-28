import "../styles/Skills.css";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaReact />,
    name: "React JS",
    level: "95%",
  },
  {
    icon: <FaJs />,
    name: "JavaScript",
    level: "90%",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    level: "98%",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    level: "96%",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
    level: "90%",
  },
  {
    icon: <FaGitAlt />,
    name: "Git & GitHub",
    level: "85%",
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span>My Skills</span>

          <h2>
            Frontend Technologies
          </h2>

          <p>
            I build responsive, modern and user-friendly websites using
            the latest frontend technologies.
          </p>

        </motion.div>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              className="skill-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * .1 }}
              viewport={{ once: true }}
            >

              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <div className="progress">

                <div
                  className="progress-bar"
                  style={{ width: skill.level }}
                ></div>

              </div>

              <span>{skill.level}</span>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;