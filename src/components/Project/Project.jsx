import React from "react"
import "./Project.less"

import { Row, Col } from "antd"
import { DiAtom } from "react-icons/di"
import { ImGithub, ImCodepen } from 'react-icons/im';
import { FiExternalLink } from "react-icons/fi"

const Project = ({ github, walkthrough, name, description, technologies }) => {
  let displayTechnologies = technologies.split(",").map(technology => {
    return (technology += "\xa0\xa0")
  })

  return (
    <section className="project">
      <Row>
        <Col span={12} className="project__nav">
          <DiAtom />
        </Col>
        <Col span={12} className="project__links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <ImGithub />
          </a>
        </Col>
      </Row>
      <Row className="project__header">
        <Col span={24}>
          <h3>{name}</h3>
          <p>{description}</p>
        </Col>
      </Row>
      <Row>
        <Col className="project__tech">
          <p>{displayTechnologies}</p>
        </Col>
      </Row>
    </section>
  )
}

export default Project
