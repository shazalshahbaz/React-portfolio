import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
  "Home",
  "About",
  "Skills",
  "Services",
  "Experience",
  "Projects",
  "Contact",
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (name) => {
    const id = name.toLowerCase();

    setActive(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${scrolled ? "navbar-scroll" : ""}`}
    >
      <div className="navbar-container">

        {/* Logo */}

        <div className="logo">
  <span className="logo-gradient">&lt;</span>
  <span className="logo-text">Portfolio</span>
  <span className="logo-gradient">/&gt;</span>
</div>

        {/* Desktop Menu */}

        <nav className="desktop-menu">
          {links.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={
                active === item.toLowerCase()
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Hire Button */}

        <button className="hire-btn">
          Hire Me
        </button>

        {/* Mobile Icon */}

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-menu"
        >
          {links.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="mobile-link"
            >
              {item}
            </button>
          ))}

          <button className="mobile-hire">
            Hire Me
          </button>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;