/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

import VIT_Logo from './assets/images/VIT_logo.png';
import Humourbaba_image from './assets/images/Humourbaba.jpg';
import Skillship_image from './assets/images/SkillShip.jpg';

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Jainam Desai',
  title: "Hi, I'm Jainam",
  subTitle: emoji(
    'Welcome to my place of passion. Programming is not only my passion but is something that I developed over time with great effort. I am driven by my insatiable fascination for Computers I learn something new every day as there is so much yet to learn.'
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://www.github.com/th3c0d3br34ker/',
  linkedin: 'https://www.linkedin.com/in/jainam-desai/',
  instagram: 'https://www.instagram.com/_the_apollyon_/',
  hackerrank: 'https://www.hackerrank.com/jainamd',
};

// Your Skills Section

const skillsSection = {
  title: 'Things i work with',
  subTitle: 'CRAZY DEVELOPER LOOKING TO EXPLORE ALL ASPECTS OF PROGRAMMING',
  skills: [
    emoji('⚡ Languages known: java, python, javascript and C++'),
    emoji('⚡ Web 🌐 and Desktop 🖥️ Applications'),
    emoji('⚡ Machine Learning and Deep Learning'),
  ],

  softwareSkills: [
    {
      skillName: 'Java',
      fontAwesomeClassname: 'fab fa-java',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js-square',
    },
    {
      skillName: 'HTML 5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'CSS 3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },
    {
      skillName: 'Bootstrap',
      fontAwesomeClassname: 'fab fa-bootstrap',
    },
    {
      skillName: 'Reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node-js',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'SQL',
      fontAwesomeClassname: 'fas fa-database',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'python',
      progressPercentage: '75%',
    },
    {
      Stack: 'C/C++',
      progressPercentage: '72%',
    },
    {
      Stack: 'Java',
      progressPercentage: '80%',
    },
    {
      Stack: 'ReactJS',
      progressPercentage: '74%',
    },
    {
      Stack: 'Backend',
      progressPercentage: '60%',
    },
    {
      Stack: 'Design',
      progressPercentage: '40%',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'th3c0d3br34ker',
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achivementsCards: [],
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [],
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [],
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '',
  email_address: '',
};

//Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: 'Vellore Institute of Technology, Vellore',
      logo: VIT_Logo,
      subHeader: 'Master of Science in Computer Science',
      duration: 'July 2019 - Present',
      desc: 'Participated in various co-cirricular activities.',
      descBullets: [
        'CGPA: 9.1 (As of Fall Semester 2020)',
        'Vice Chairperson of AYUDA NGO.',
        'Vice Chairperson of Skillship Foundation, Vellore.',
      ],
    },
  ],
};

const workExperiences = {
  viewExperiences: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Software Intern',
      company: 'Humourbaba',
      companylogo: Humourbaba_image,
      date: 'Nov 2020 – Present',
      desc: 'Humourbaba is a next-generation fandom shopping platform crafting technologically advanced premium merchandise.',
      descBullets: [
        'Currently working with a team of Frontend Developers on the officail site.',
      ],
    },
    {
      role: 'Tech Intern',
      company: 'SkillShip Foundation',
      companylogo: Skillship_image,
      date: 'Sept 2020 – Present',
      desc: 'SkillShip foundation is a section-8 Non-Profit Organization incorporated under Government of India, Skillship is open for all network, in spite of the fact that it bolsters assorted variety and needs to acquire diversity Education, in this manner, saves half of seats for under-spoke to gatherings including women, LGBTQ to mitigate poverty among-est needy and poor and other weaker sections by providing support and intervention to create of a culture of entrepreneurship and undertake skill gap analysis and addressing the issues by creating infrastructure in the form of Innovation centers and support systems and providing them assistance in form of mentoring and training residential',
    },
    // {
    //   role: 'Software Engineer Intern',
    //   company: 'Airbnb',
    //   companylogo: require('./assets/images/airbnbLogo.png'),
    //   date: 'Jan 2015 – Sep 2015',
    //   desc:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    // },
  ],
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  educationInfo,
  workExperiences,
};
