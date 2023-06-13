import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import axios from "axios";
import Card from "../Card";

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });
  useEffect(() => {
    const getPortfolio = async () => {
      await axios.get("/api/portfolio").then((res) => {
        setPortfolio(res.data);
      });
    };
    getPortfolio();
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port) => (
          <Card port={port} key={port._id} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
    </>
  );
};
export default Portfolio;
