import React, {useEffect, useState, useRef} from 'react';

import Navigation from './Components/Navigation/Navigation';
import Slider from './Components/Slider/Slider';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Social from './Components/Social/Social';

import ScrollAnimation from 'react-animate-on-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

import { Layout } from 'antd';
const { Content} = Layout;

export default function Home({data}) {

  const [isLoading, setIsLoading] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in'
  });
  const slider = useRef();
  const about = useRef();
  const skills = useRef();
  const portfolio = useRef();
  const contact = useRef();
  const experience = useRef();
  const mobileMenu = useRef();
  const navigation = useRef();

  let visibility = 'hide';

  useEffect( () => {
    if (isLoading && window.scrollY === 0) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.body.style.overflow = "visible";
        setIsLoading(false);
      }, 2500)
    } else {
      setIsLoading(false);
    }

    if (toggleMenu) {
      mobileMenu.current.className = 'show'
    }  
  }, [toggleMenu, isLoading]);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0  && currPos.y > -100) {
      const shouldBeStyle = {
        backgroundColor: 'rgba(18, 18, 24, 0)',
        transition: '0.6s',
      }
      setHeaderStyle(shouldBeStyle);
    };

    if (currPos.y < -101  && currPos.y > -200) {
      const shouldBeStyle = {
        transition: '0.6s',
        backgroundColor: 'rgba(18, 18, 24, 0.4)',
        boxShadow: 'rgba(2, 12, 27, 0.2) 0px 10px 30px -10px'
      }
      setHeaderStyle(shouldBeStyle);
    };

    if (currPos.y <= -250) {
      const isVisible = currPos.y > prevPos.y

      const shouldBeStyle = {
        visibility: isVisible ? 'visible' : 'hidden',
        transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
        transform: isVisible ? 'none' : 'translate(0, -100%)', 
        backgroundColor: 'rgba(18, 18, 24, 0.4)',
        boxShadow: 'rgba(2, 12, 27, 0.2) 0px 10px 30px -10px'
      }
      setHeaderStyle(shouldBeStyle);
    }

  }, [headerStyle]);

  const activateMobile = () => {  
    if (mobileMenu.current.className === "show") {
      mobileMenu.current.className = "hide"
    }
    setToggleMenu(!toggleMenu);
  };

  const scrollView = (id) => { 
    id.current.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    mobileMenu.current.className = "hide";
    setToggleMenu(false);
  };

  return (
    <Layout>
      <Navigation 
        slider={slider}
        about={about}
        skills={skills}
        portfolio={portfolio}
        experience={experience}
        contact={contact}
        scrollView={scrollView} 
        activateMobile={activateMobile}
        toggleMenu={toggleMenu}
        mobileMenu={mobileMenu}
        visibility={visibility}
        setToggleMenu={setToggleMenu}
        navigation={navigation}
        headerStyle={headerStyle}
        isLoading={isLoading} 
      />
      <Slider 
        slider={slider}
        about={about} 
        scrollView={scrollView}
        setToggleMenu={setToggleMenu}
        isLoading={isLoading} 
      />
      <Content>
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <Social isLoading={isLoading} />
      </Content>
    </Layout>
  ) 
};