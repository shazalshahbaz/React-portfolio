import "../styles/Experience.css";
import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Started Web Development",
    description:
      "Learned HTML, CSS and JavaScript fundamentals and started building responsive websites.",
  },
  {
    year: "2026",
    title: "React JS Developer",
    description:
      "Built modern React projects, reusable components and responsive user interfaces.",
  },
  {
    year: "Present",
    title: "Open For Freelance",
    description:
      "Focused on creating premium frontend websites with React.js and modern UI/UX.",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span>My Journey</span>

          <h2>Experience Timeline</h2>

          <p>
            Every project helped me improve my frontend development
            skills and build better user experiences.
          </p>

        </motion.div>

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: .6 }}
              viewport={{ once: true }}
            >

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;