import React from 'react';

// Icons
import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { ImAccessibility } from 'react-icons/im';
import { SiRedux, SiGatsby, SiAdobephonegap, SiWebpack, SiSass, SiHtml5, SiBootstrap, SiCss3, SiTypescript, SiReact, SiNextDotJs, SiEslint, SiTailwindcss, SiJavascript, SiGithub, SiNpm, SiNodeDotJs, SiMicrosoft, SiPostman, SiMongodb, SiGraphql, SiStorybook, SiFigma } from 'react-icons/si';

export const frontEnd = {
      id: 1,
      title: 'Front End Dev.', 
      description: 'My approach is to treat each application as if it were a canvas. My advanced proficiency with an arsenal of front end libraries and frameworks - HTML5, CSS3, JavaScript, React, Tailwind makes programming life into that canvas an exhilarating experience, one in which I deliver an aesthetic that is visually stunning, responsive, and commensurate to the client’s vision.',
      technologies: [
            {id: 4, value: 'HTML5', icon: <SiHtml5 />}, 
            {id: 5, value: 'CSS3', icon: <SiCss3 />}, 
            {id: 6, value: 'JavaScript', icon: <SiJavascript />}, 
            {id: 7, value: 'React', icon: <SiReact />}, 
            {id: 8, value: 'Redux', icon: <SiRedux />},
            {id: 9, value: 'Typescript', icon: <SiTypescript />},
            {id: 10, value: 'Webpack', icon: <SiWebpack />},
            {id: 11, value: 'Next.js', icon: <SiNextDotJs />},
            {id: 12, value: 'Gatsby', icon: <SiGatsby />},
            {id: 13, value: 'Sass', icon: <SiSass />}, 
            {id: 14, value: 'Tailwind', icon: <SiTailwindcss />},
            {id: 15, value: 'Bootstrap 4', icon: <SiBootstrap />},  
            {id: 16, value: 'Ant Design', icon: <AiOutlineAntDesign />},
            {id: 17, value: 'Res. Design', icon: <SiAdobephonegap />},
            {id: 18, value: 'A11y', icon: <ImAccessibility />}
      ]
};

export const backEnd = {
      id: 2,
      title: 'Back End Dev.', 
      description: 'When building out the server side of my application, I employ Node in conjunction with framework, Express, to utilize complex data and logic. This ensures that the development environment has been optimized for speed and efficiency when building out REST APIs that will be used to handle the data when delievered to the client-side. In addition, I’m always working along the sidelines to perfect the art of writing queries within SQL.',
      technologies: [
            {id: 17, value: 'Node.JS', icon: <SiNodeDotJs /> },
            {id: 18, value: 'Express', icon: <GoGear /> }, 
            {id: 19, value: 'GraphQL', icon: <SiGraphql /> },
            {id: 20, value: 'MongoDB', icon: <SiMongodb />}     
      ]
};

export const workflow = {
      id: 3,
      title: 'Workflow', 
      description: 'Throughout the development process I utilize a number of tools and resources into my project to maximize productivity and reduce workspace clutter: package managers, version control systems, project management applications, and wire framing architectures in the early stages of planning for a thorough game-plan that ensures deadlines are being met in an appropriate matter and quality is being retained.',
      technologies: [
            {id: 21, value: 'NPM', icon: <SiNpm /> }, 
            {id: 22, value: 'Git', icon: <SiGithub />}, 
            {id: 23, value: 'Figma', icon: <SiFigma />}, 
            {id: 24, value: 'Storybook', icon: <SiStorybook />},
            {id: 25, value: 'esLint', icon: <SiEslint />},
            {id: 26, value: 'Agile', icon: <FaUsers />},
            {id: 27, value: 'VS Code', icon: <SiMicrosoft />},
            {id: 28, value: 'Postman', icon: <SiPostman />},
      ]
};