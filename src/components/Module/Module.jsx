import React from "react"
import { Layout, Row, Col } from "antd"
import { ImGithub, ImCodepen } from 'react-icons/im';

import "./Module.less"

const Module = ({
  id,
  title,
  role,
  name,
  description,
  github,
  codepen,
  technologies,
  walkthrough,
  image,
}) => {
  let displayTechnologies = technologies.split(",").map(technology => {
    return (technology += "\xa0\xa0\xa0\xa0\xa0\xa0")
  })

  return (
    <Layout className="module" data-sal="fade" data-sal-easing="ease-in-out" data-sal-duration="3000">
      {id % 2 !== 0 ? (
        <Row>
          <Col md={10} className="module__details">
            <h4>{role}</h4>
            <h3>{name}</h3>
            <Row>
              <Col xs={24} className="module__logline">
                <p>{description}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={24} className="module__technologies">
                <p>{displayTechnologies}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={24} className="module__nav">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <ImGithub />
                </a>
                <a href={codepen} className='archive__link' target="_blank" rel="noopener noreferrer">
                  <ImCodepen />
                </a>
              </Col>
            </Row>
          </Col>
          <Col md={14} className="module__img">
            <img src={image} alt={title} />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col md={14} className="module__img">
            <img src={image} alt={title} />
          </Col>
          <Col md={10} className="module__details module__details--right ">
            <h3>{name}</h3>
            <Row>
              <Col className="module__logline module__logline--right">
                <p>{description}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={24} className="module__technologies">
                <p>{displayTechnologies}</p>
              </Col>
            </Row>
            <Row>
              <Col xs={24} className="module__nav module__project-right">
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <ImGithub />
                </a>
                <a href={codepen} className='archive__link' target="_blank" rel="noopener noreferrer">
                  <ImCodepen />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Layout>
  )
}

export default Module
