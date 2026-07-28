import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI Chat Board",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=AI+Chat+Board",
    description:
      "Modern AI chatbot built with React featuring a clean UI and responsive design.",
    tech: ["React", "CSS", "API"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Weather App",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Weather+App",
    description:
      "Responsive weather application using API integration with beautiful UI.",
    tech: ["React", "Axios", "Weather API"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Job Portal",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Job+Portal",
    description:
      "Frontend job listing platform with filtering and responsive components.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/",
    live: "#",
  },
  {
    title: "Portfolio Website",
    image: "https://placehold.co/600x400/0f172a/ffffff?text=Portfolio",
    description:
      "Luxury animated portfolio with glassmorphism and smooth transitions.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>My Projects</span>

          <h2>Featured Projects</h2>

          <p>
            Here are some of my React projects showcasing responsive UI,
            clean code and modern frontend development.
          </p>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn live-btn"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;