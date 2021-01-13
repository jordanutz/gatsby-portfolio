import React from 'react';

// Icons
import { GrGraphQl, GrGatsbyjs } from 'react-icons/gr';
import { AiFillHtml5, AiOutlineAntDesign } from 'react-icons/ai';
import { DiCss3 , DiJavascript, DiSass, DiNpm, DiGitBranch, DiTrello } from 'react-icons/di';
import { FaBootstrap, FaUsers, FaMicrosoft, FaSpaceShuttle } from 'react-icons/fa';
import { GoDatabase, GoGear } from 'react-icons/go';
import { IoLogoNodejs, IoIosCube } from 'react-icons/io';
import { GiWindSlap, GiAtomicSlashes, GiSmartphone } from 'react-icons/gi';
import { HiViewGrid } from 'react-icons/hi';
import { RiReactjsFill } from 'react-icons/ri';
import { ImAccessibility } from 'react-icons/im';
import { SiAdobephotoshop, SiFigma, SiTypescript, SiNextDotJs } from 'react-icons/si';

export const frontEnd = {
      id: 1,
      title: 'Front End Dev.', 
      description: 'My approach is to treat each application as if it were a canvas. My advanced proficiency with an arsenal of front end libraries and frameworks - HTML5, CSS3, JavaScript, React, Tailwind makes programming life into that canvas an exhilarating experience, one in which I deliver an aesthetic that is visually stunning, responsive, and commensurate to the client’s vision.',
      technologies: [
            {id: 4, value: 'HTML5', icon: <AiFillHtml5 />}, 
            {id: 5, value: 'CSS3', icon: <DiCss3 />}, 
            {id: 6, value: 'JavaScript', icon: <DiJavascript />}, 
            {id: 7, value: 'React', icon: <RiReactjsFill />}, 
            {id: 8, value: 'Redux', icon: <GiAtomicSlashes />},
            {id: 9, value: 'Typescript', icon: <SiTypescript />},
            {id: 10, value: 'Webpack', icon: <IoIosCube />},
            {id: 11, value: 'Next.js', icon: <SiNextDotJs />},
            {id: 12, value: 'Gatsby', icon: <GrGatsbyjs />},
            {id: 13, value: 'Sass', icon: <DiSass />}, 
            {id: 14, value: 'Tailwind', icon: <GiWindSlap />},
            {id: 15, value: 'Bootstrap 4', icon: <FaBootstrap />},  
            {id: 16, value: 'Ant Design', icon: <AiOutlineAntDesign />},
            {id: 17, value: 'A11y', icon: <ImAccessibility />},
            {id: 18, value: 'Resp. Design', icon: <GiSmartphone />}
      ]
};

export const backEnd = {
      id: 2,
      title: 'Back End Dev.', 
      description: 'When building out the server side of my application, I employ Node in conjunction with framework, Express, to utilize complex data and logic. This ensures that the development environment has been optimized for speed and efficiency when building out REST APIs that will be used to handle the data when delievered to the client-side. In addition, I’m always working along the sidelines to perfect the art of writing queries within SQL.',
      technologies: [
            {id: 17, value: 'Node.JS', icon: <IoLogoNodejs  /> },
            {id: 18, value: 'Express', icon: <GoGear /> }, 
            {id: 19, value: 'GraphQL', icon: <GrGraphQl /> },
            {id: 20, value: 'PostgreSQL', icon: <GoDatabase />}     
      ]
};

export const workflow = {
      id: 3,
      title: 'Workflow', 
      description: 'Throughout the development process I utilize a number of tools and resources into my project to maximize productivity and reduce workspace clutter: package managers, version control systems, project management applications, and wire framing architectures in the early stages of planning for a thorough game-plan that ensures deadlines are being met in an appropriate matter and quality is being retained.',
      technologies: [
            {id: 21, value: 'NPM', icon: <DiNpm />}, 
            {id: 22, value: 'Git', icon: <DiGitBranch/>}, 
            {id: 23, value: 'Figma', icon: <SiFigma />},
            {id: 24, value: 'Photoshop', icon: <SiAdobephotoshop />},
            {id: 25, value: 'Agile', icon: <FaUsers />},
            {id: 26, value: 'Trello', icon: <DiTrello />}, 
            {id: 27, value: 'VS Code', icon: <FaMicrosoft />},
            {id: 28, value: 'Postman', icon: <FaSpaceShuttle />},
      ]
};