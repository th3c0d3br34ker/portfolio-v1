import React from "react";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className="footer-text">{"Made with 🤍 by Jainam Desai"}</p>
      </div>
    </Fade>
  );
}
