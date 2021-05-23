import React, { Fragment } from 'react';

import Education from './education/Education.js';
import Footer from '../components/footer/Footer.jsx';
import Greeting from './greeting/Greeting.jsx';
import Header from '../components/header/Header.jsx';
import Profile from './profile/Profile.jsx';
import Projects from './projects/Projects.jsx';
import Skills from './skills/Skills.jsx';
import StackProgress from './skillProgress/skillProgress.jsx';
import Top from './topbutton/Top.jsx';
import WorkExperience from './workExperience/WorkExperience';

const Main = () => {
  return (
    <Fragment>
      <Header />
      <Greeting />
      <Skills />
      <Education />
      <WorkExperience />
      <StackProgress />
      <Projects />
      <Profile />
      <Footer />
      <Top />
    </Fragment>
  );
};

export default Main;
