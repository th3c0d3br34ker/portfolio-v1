import React, { useState, createRef } from "react";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className="quote-card">
      <div style={{ background: rgb(colorArrays) }} className="quote-banner">
        <div className="quote-blurred_div"></div>
        <div className="quote-div-person">
          <h5 className="quote-text-person">{cardInfo.person}</h5>
        </div>
        <img
          ref={imgRef}
          className="quote-roundedimg"
          src={cardInfo.image}
          alt={cardInfo.alt}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="quote-text-details">
        <p className="quote-text-desc">{cardInfo.text}</p>
      </div>
    </div>
  );
}
