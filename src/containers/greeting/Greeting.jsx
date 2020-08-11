import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="programmer"
              src={require("../../assets/images/programmer.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
