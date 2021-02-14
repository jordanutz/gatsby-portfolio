import React from "React"
import "./About.less"

import { Layout, Row, Col } from "antd"

const About = ({ about }) => {
  return (
    <div ref={about} data-sal="fade" data-sal-easing="ease-in-out" data-sal-duration="3000">
      <Layout className="about">
        <Row>
          <Col md={12} className="about__bio">
            <h2>About</h2>
            <p>
              Welcome to the corner of the Internet where a repository of my
              imagination is transpiled into code. I embarked on a journey
              toward becoming a Front End Software Engineer by attending{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.devmountain.com"
              >
                DevMountain
              </a>
              , a three month intensive bootcamp that offers a full stack
              curriculum. This adventure has ultimately led me to join the team
              at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.webstaurantstore.com/"
              >
                WebstaurantStore
              </a>
              , where I spend my day writing performant code in React while
              soaking up the rays Tampa has to offer.{" "}
            </p>
            <p>Here are just a few hobbies of mine outside of programming:</p>
            <Row>
              <Col xs={12}>
                <ul>
                  <li className="about__hobby">Photography</li>
                  <li className="about__hobby">Music</li>
                  <li className="about__hobby">Gaming</li>
                </ul>
              </Col>
              <Col xs={12}>
                <ul>
                  <li className="about__hobby">Arcading</li>
                  <li className="about__hobby">Film</li>
                  <li className="about__hobby">Biking</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col
            sm={{ span: 12, offset: 4 }}
            md={{ span: 12, offset: 0 }}
            className="about__cover"
          >
            <img src="https://i.ibb.co/Ry4DDkv/DSC3017.jpg" alt="Jordan Utz" />
            <div className="about__overlay"></div>
          </Col>
        </Row>
      </Layout>
    </div>
  )
}

export default About
