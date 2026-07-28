import "../styles/Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaCode,
  FaBug,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Frontend Development",
    desc: "Modern, responsive and high-performance React websites with clean code.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful, user-friendly and attractive interfaces with premium design.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Perfect experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaRocket />,
    title: "Website Optimization",
    desc: "Fast loading websites with optimized performance and SEO.",
  },
  {
    icon: <FaCode />,
    title: "React Components",
    desc: "Reusable and scalable React components following best practices.",
  },
  {
    icon: <FaBug />,
    title: "Bug Fixing",
    desc: "Fix frontend issues, improve UI and optimize existing websites.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>My Services</span>

          <h2>What I Can Do</h2>

          <p>
            I create premium frontend experiences using modern web
            technologies, focusing on performance, responsiveness,
            clean code and beautiful UI.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button className="service-btn">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;