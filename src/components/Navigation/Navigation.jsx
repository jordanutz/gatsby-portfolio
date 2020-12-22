import React from 'react';
import './Navigation.less';

// Components
import { Row, Col } from 'antd';
import { Link } from 'gatsby';
import Mobile from '../Mobile/Mobile';
import { BiMenuAltLeft } from 'react-icons/bi';

const Navigation = (props) => {

    const { 
        scrollView, 
        mobileMenu, 
        setToggleMenu, 
        toggleMenu, 
        visibility,
        activateMobile, 
        slider,
        about, 
        skills, 
        experience, 
        portfolio, 
        contact, 
        isLoading } = props;

    return (
        <>
         {!isLoading &&
            <>
            <nav style={{...props.headerStyle}} className="navigation">
                <Row>
                    <Col xs={6} sm={3} className='navigation__logo'>
                        <h2 className='navigation__header' onClick={() => scrollView(slider, setToggleMenu)}>
                            <Link to='/'>JU</Link>
                        </h2>
                    </Col>
                    <Col xs={18} sm={21}>
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <button className="navigation__item-btn" onClick={() => scrollView(about, setToggleMenu)}>
                                    <span>01.</span>About
                                </button>
                            </li>
                            <li className="navigation__item">
                                <button className="navigation__item-btn" onClick={() => scrollView(skills, setToggleMenu)}>
                                    <span>02.</span>Skills
                                </button>
                            </li>
                            <li className="navigation__item">
                                <button className="navigation__item-btn" onClick={() => scrollView(experience, setToggleMenu)}>
                                    <span>03.</span>Experience
                                </button>
                            </li>
                            <li className="navigation__item">
                                <button className="navigation__item-btn" onClick={() => scrollView(portfolio, setToggleMenu)}>
                                    <span>04.</span>Portfolio
                                </button>
                            </li>
                            <li className="navigation__item">
                                <button className="navigation__item-btn" onClick={() => scrollView(contact, setToggleMenu)}>
                                    <span>05.</span>Contact
                                </button>
                            </li>
                            <button className="navigation__btn">
                                <a href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                            </button>
                        </ul>
                        <section className="navigation__mobile">
                            <BiMenuAltLeft 
                                className="mobile__menu" 
                                onClick={() => activateMobile(mobileMenu)} 
                                id="toggle" />
                        </section>
                    </Col>
                </Row>
            </nav>
            
            <Mobile 
                about={about}
                skills={skills}
                experience={experience}
                portfolio={portfolio}
                contact={contact}
                slider={slider}
                activateMobile={activateMobile}
                toggleMenu={toggleMenu} 
                scrollView={scrollView}
                mobileMenu={mobileMenu}
                visibility={visibility}
                setToggleMenu={setToggleMenu}
            />   

            </>

         } 
       
        </>
    )
}

export default Navigation