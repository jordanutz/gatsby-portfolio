import React from "react"
import "./Slider.less"

// Components
import { Layout, Row, Col } from "antd"
import { BsChevronDown } from "react-icons/bs"

const Slider = ({ scrollView, about, setToggleMenu, slider }) => {
  return (
    <div ref={slider}>
      <Layout className="slider">
        <Row className="slider__carousel">
          <Col span={24}>
            <section className="slider__header" data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000">
              <h1>Jordan Utz</h1>
              <h2>Front End Software Engineer</h2>
            </section>
          </Col>
        </Row>
        <BsChevronDown
          className="slider__icon "
          onClick={() => scrollView(about, setToggleMenu)}
          data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000" data-sal-delay="3000"
        />
      </Layout>
    </div>
  )
}

export default Slider
