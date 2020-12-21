import React from 'react';
import './Mobile.less';

// Components
import { Layout, Row, Col } from 'antd';

const Mobile = ({ mobileMenu, 
                activateMobile, 
                scrollView, 
                setToggleMenu, 
                slider,
                about, 
                skills, 
                experience, 
                portfolio, 
                contact }) => {
    return (
        <aside id="mobile" ref={mobileMenu} className={mobileMenu}>
            <Layout className="mobile__container">
                <Row>
                    <Col xs={24} className='mobile__icon-item'>
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} className='mobile__logo'>
                        <h1 className='mobile__header' onClick={() => scrollView(slider, setToggleMenu)}>JU</h1>
                    </Col>
                  <Col xs={24}>              
                        <ul className="mobile__list">
                            <li className="mobile__item">
                                <button className="mobile__btn" onClick={() => scrollView(about, setToggleMenu)}>
                                    <span className="mobile__sub">01.</span>About
                                </button>
                            </li>
                            <li className="mobile__item">
                                <button className="mobile__btn" onClick={() => scrollView(skills, setToggleMenu)}>
                                    <span className="mobile__sub">02.</span>Skills
                                </button>
                            </li>
                            <li className="mobile__item">
                                <button className="mobile__btn" onClick={() => scrollView(experience, setToggleMenu)}>
                                    <span className="mobile__sub">03.</span>Experience
                                </button>
                            </li>
                            <li className="mobile__item">
                                <button className="mobile__btn" onClick={() => scrollView(portfolio, setToggleMenu)}>
                                    <span className="mobile__sub">04.</span>Portfolio
                                </button>
                            </li>
                            <li className="mobile__item" style={{marginBottom: '1.5rem'}}>
                                <button className="mobile__btn" onClick={() => scrollView(contact, setToggleMenu)}>
                                    <span className="mobile__sub">05.</span>Contact
                                </button>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} className="mobile__resume">
                        <a href="https://drive.google.com/file/d/1pSxbKb7ZTj7DvMCaFk0zTeeIQNkLgEkn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="mobile__resume-btn">Resume</button>
                        </a>
                    </Col>
                </Row>
            </Layout> 
        </aside>
    )
};

export default Mobile