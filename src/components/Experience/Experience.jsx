import React, {useState} from 'react';
import './Experience.less';

// Components
import { Layout, Row, Col } from 'antd';

const Experience = ({experience}) => {

    const [web, setWeb] = useState(true);
    const [elink, setElink] = useState(false);
    const [dev, setDev] = useState(false);

    const handleToggle = (event) => {
        if (event.currentTarget.getAttribute('name') === 'webstaurant') {
            setWeb(true);
            setElink(false);
            setDev(false);
        } else if (event.currentTarget.getAttribute('name') === 'elink') {
            setWeb(false);
            setElink(true);
            setDev(false);
        } else if (event.currentTarget.getAttribute('name') === 'devmountain') {
            setWeb(false);
            setElink(false);
            setDev(true);
        }
    };

    return (
       <div ref={experience}>
          <Layout className="experience">
            <Row>
               <Col xs={24} sm={{span: 20, offset: 1}} lg={{span: 24, offset: 0}} className="experience__alignment">
                  <h2>Experience</h2>
               </Col>
               <Col xs={24} sm={{span: 18, offset: 2}} lg={{span: 6, offset: 0}}>
                  <Row className="experience__overflow">
                        <Col xs={12} sm={8} lg={24} className="experience__selection" name="webstaurant" onClick={(e) => handleToggle(e)}>
                           <section className={`experience__grid-item ${web && 'experience__selection--active'}`}>
                              <h4>WebstaurantStore</h4>
                           </section>
                        </Col>
                        <Col xs={12} sm={8} lg={24} name="elink" onClick={(e) => handleToggle(e)} className="experience__selection">
                           <section className={`experience__grid-item ${elink && 'experience__selection--active'}`}>
                              <h4>eLink Design</h4>
                           </section> 
                        </Col>
                        <Col xs={12} sm={8} lg={24} name="devmountain" onClick={(e) => handleToggle(e)} className="experience__selection">
                           <section className={`experience__grid-item ${dev && 'experience__selection--active'}`}>
                              <h4>DevMountain</h4>
                           </section>
                        </Col>
                  </Row>
               </Col>
               <Col xs={24} sm={{span: 18, offset: 2}} lg={{span: 18, offset: 0}}>
                  { web && 
                     <Row className="experience__history">
                        <Col xs={24}>
                           <h3>WebstaurantStore</h3>
                        </Col>
                        <Col xs={24} className="experience__history-details">
                           <h5>Front End Developer</h5>
                           <h5>May 2020 - Current</h5>
                           <h5>Tampa, FL</h5>
                        </Col>
                        <Col xs={24}>
                           <ul>
                              <li className="about__hobby">
                                 <p>Collaborated closely with team of designers in developing new user interfaces while improving accessibility of store platform so that ADA compliance is being achieved</p>
                              </li>
                              <li className="about__hobby">
                                 <p>Contributed extensively to PAS by converting React-Bootstrap code into maintainable and performant Ant Design components</p>
                              </li>
                              <li className="about__hobby">
                                 <p>Improved Webpack performance for speed and efficiency, ultimately reducing build times in half for running and deploying projects in Admin Portal </p>
                              </li>
                           </ul>      
                        </Col>
                     </Row>
      
                  }
                  { elink &&
                     <Row className="experience__history">
                        <Col xs={24}>
                           <h3>eLink Design</h3>
                        </Col>
                        <Col xs={24} className="experience__history-details">
                           <h5>Web Developer</h5>
                           <h5>May 2019 - Apr 2020</h5>
                           <h5>Lexington, KY</h5>
                        </Col>
                        <Col xs={24}>
                           <ul>
                              <li className="about__hobby">
                                 <p>Optimized the user experience of applications by designing and developing rich, responsive interfaces for a variety of clientele, maintaining cross-browser compatibility</p>
                              </li>
                              <li className="about__hobby">
                                 <p>Acquired extensive front end experience through the utilization of a CMS, Site Administrator, to produce dynamic websites</p>
                              </li>
                              <li className="about__hobby">
                                 <p>Clients included many local and regional based companies spanning the Bluegrass state: Lexington Clinic, Somerset Flooring, and Mulberry Builders</p>
                              </li>   
                           </ul>
                        </Col>
                     </Row>
                  }
                  { dev &&
                     <Row className="experience__history">
                        <Col xs={24}>
                              <h3>DevMountain</h3>
                        </Col>
                        <Col xs={24} className="experience__history-details">
                              <h5>Web Development</h5>
                              <h5>Aug 2018 - Apr 2019</h5>
                              <h5>Lehi, UT</h5>
                        </Col>
                        <Col xs={24}>
                           <ul>
                              <li className="about__hobby">
                                 <p>Completion of a three-month full stack web development curriculum based in Phoenix, AZ</p>
                              </li>
                              <li className="about__hobby">
                                 <p>Additional time spent at campus located in Lehi, UT further sharpening technical experienceet through its immersive project-building approach to training</p>
                              </li>
                           </ul> 
                        </Col>
                     </Row>
         
                  }
               </Col>
            </Row>
         </Layout>

       </div>
    )
};

export default Experience;