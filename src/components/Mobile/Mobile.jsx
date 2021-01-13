import React from 'react';
import './Mobile.less';

// Components
import { Layout, Row, Col, Button, Typography } from 'antd';
import { AiOutlineClose } from 'react-icons/ai';

const { Text } = Typography;

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
                        <AiOutlineClose
                            onClick={() => activateMobile(mobileMenu)} 
                            className="mobile__menu" 
                         />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} className='mobile__logo'>
                        <h1 className='mobile__header' onClick={() => scrollView(slider, setToggleMenu)}>JU</h1>
                    </Col>
                  <Col xs={24}>              
                        <ul className="mobile__list">
                            <li className="mobile__item">
                                <Button className="mobile__btn" onClick={() => scrollView(about, setToggleMenu)} type="link">
                                    <Text className="mobile__sub">01.</Text>About
                                </Button>
                            </li>
                            <li className="mobile__item">
                                <Button className="mobile__btn" onClick={() => scrollView(skills, setToggleMenu)} type="link">
                                    <Text className="mobile__sub">02.</Text>Skills
                                </Button>
                            </li>
                            <li className="mobile__item">
                                <Button className="mobile__btn" onClick={() => scrollView(experience, setToggleMenu)} type="link">
                                    <Text className="mobile__sub">03.</Text>Experience
                                </Button>
                            </li>
                            <li className="mobile__item">
                                <Button className="mobile__btn" onClick={() => scrollView(portfolio, setToggleMenu)} type="link">
                                    <Text className="mobile__sub">04.</Text>Portfolio
                                </Button>
                            </li>
                            <li className="mobile__item" style={{marginBottom: '1.5rem'}}>
                                <Button className="mobile__btn" onClick={() => scrollView(contact, setToggleMenu)} type="link">
                                    <Text className="mobile__sub">05.</Text>Contact
                                </Button>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={24} className="mobile__resume">
                       
                            <Button className="classic">
                               Resume
                            </Button>
        
                    </Col>
                </Row>
            </Layout> 
        </aside>
    )
};

export default Mobile