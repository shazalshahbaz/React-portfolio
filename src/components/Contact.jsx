import "../styles/Contact.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
        >

          <span>Contact Me</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project idea? Let's build something modern,
            beautiful and professional together.
          </p>

        </motion.div>

        <div className="contact-content">

          <motion.div
            className="contact-info"
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h3>Email</h3>
                <p>youremail@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h3>Phone</h3>
                <p>+92 300 0000000</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h3>Location</h3>
                <p>Pakistan</p>
              </div>
            </div>

            <div className="social-links">

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

          <motion.form
            className="contact-form"
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.7 }}
            viewport={{ once:true }}
          >

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
            ></textarea>

            <button type="submit">

              Send Message

              <FaPaperPlane />

            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}

export default Contact;