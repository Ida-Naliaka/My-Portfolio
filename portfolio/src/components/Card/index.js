import React from "react";

const Card = ({ port }) => {
  return (
    <div className="image-box" key={port._id}>
      <img src={port.image} className="portfolio-image" alt="portfolio" />
      <div className="content">
        <div>
          <h4 className="title">{port.name}</h4>
          <h4 className="description">{port.description}</h4>
        </div>
        <div className="buttonbox">
          <button className="btn" onClick={() => window.open(port.url)}>
            View
          </button>
          <button className="btn" onClick={() => window.open(port.sourcecode)}>
            Go to SourceCode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
