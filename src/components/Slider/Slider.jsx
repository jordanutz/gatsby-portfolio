import React from 'react';
import './Slider.less';

// Components
import { Layout, Row, Col } from 'antd';
import { BsChevronDown } from 'react-icons/bs';

const Slider = ({scrollView, about, setToggleMenu, slider, isLoading}) => {
   return (
		<div ref={slider}>
			<Layout className="slider">
				<Row className="slider__carousel">
					<Col span={24}>
                  <section className="slider__header">
                        <h1>Jordan Utz</h1> 
                        <h2>Front End Software Engineer</h2>
                  </section> 
					</Col>
				</Row>
				{!isLoading &&
					<BsChevronDown 
						className='slider__icon'
						onClick={() => scrollView(about, setToggleMenu)} />
				}
			</Layout>
		</div>
   );
}

export default Slider;