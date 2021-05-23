import React from 'react';
import { Fade } from 'react-reveal';
import { greeting } from '../../portfolio';

function Header() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="https://th3c0d3br34ker.github.io/" className="logo">
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span>
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#opensource">Open Source</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default Header;
