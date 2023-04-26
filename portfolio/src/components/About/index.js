import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faReact,
  faNodeJs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious full-stack web developer looking for a role in an
            established company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skillset one problem at a time.
          </p>
          <p align="CENTER">
            <a
              className="link"
              href="https://pdfhost.io/v/FLoLWngTC_Ida_Wafula_Resume" target="_blank" rel="noreferrer"
            >
              View my Resume
            </a>
          </p>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faPhp} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
