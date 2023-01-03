import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="wrapper">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "H",
                "i",
                ",",
                "  ",
                "I",
                "'",
                "m",
                " ",
                "I",
                "d",
                "a",
                ",",
              ]}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "w",
                "e",
                "b",
                " ",
                "d",
                "e",
                "v",
                "e",
                "l",
                "o",
                "p",
                "e",
                "r",
                ".",
              ]}
              idx={22}
            />
          </h1>
          <h2> Full stack web developer</h2>
          <Link to="/contact" className="flat-button">
            {" "}
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Home;
