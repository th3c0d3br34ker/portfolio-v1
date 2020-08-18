import React, { Component } from "react";
import Header from "../components/header/Header.jsx";
import Greeting from "./greeting/Greeting.jsx";
import Skills from "./skills/Skills.jsx";
import StackProgress from "./skillProgress/skillProgress.jsx";
import Projects from "./projects/Projects.jsx";
import Footer from "../components/footer/Footer.jsx";
import Top from "./topbutton/Top.jsx";
import Profile from "./profile/Profile.jsx";
import Quotes from "./quotes/quotes.jsx";

export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Skills />
        <StackProgress />
        <Projects />
        <Quotes />
        <Profile />
        <Footer />
        <Top />
      </div>
    );
  }
}
