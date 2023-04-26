import { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faClose,
  faBars,
  faSuitcase,
  faAddressBook,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }
  return (
    <div className="nav-bar">
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" fontSize={"25px"} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/idawafula/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" fontSize={"25px"} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/idawafula/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faSuitcase}
            color="#4d4d4e"
            fontSize={"25px"}
          />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/idawafula/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon
            icon={faAddressBook}
            color="#4d4d4e"
            fontSize={"25px"}
          />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul className={showNav ? "mobile-link" : ""}>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ida-naliaka-wafula12"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="4d4d4e"
              className="anchor-icon"
              fontSize={"25px"}
            />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Ida-Naliaka"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="4d4d4e"
              className="anchor-icon"
              fontSize={"25px"}
            />
          </a>
        </li>
        <li>
          <Mailto email="wafulaida@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="4d4d4e"
              className="anchor-icon"
              fontSize={"25px"}
            />
          </Mailto>
        </li>
      </ul>
      <div onClick={() => setShowNav(true)} className="hamburger-div">
        <FontAwesomeIcon
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </div>
  );
};

export default Sidebar;
