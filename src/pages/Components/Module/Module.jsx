import React from 'react';
import './Module.less';

// Components
import { Layout, Row, Col } from 'antd';

const Module = ({id,
					title, 
					role, 
					name, 
					description, 
					github, 
					technologies,
					walkthrough, 
					image}) => {

	let displayTechnologies = technologies.split(',').map(technology => {
		return technology += '\xa0\xa0\xa0\xa0\xa0\xa0';
	});

  	return (
    	<Layout className='module'>
			{
				id % 2 !== 0 ? 
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
									<i className="fab fa-github"></i>
								</a>
								<a href={walkthrough} target="_blank" rel="noopener noreferrer">
									<i className="fas fa-external-link-alt"></i>
								</a>
							</Col>
						</Row>
					</Col>
					<Col md={14} className="module__img">
						<img src={image} alt={title} />
					</Col>
				</Row>

				: 

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
									<i className="fab fa-github"></i>
								</a> 
								{
									name !== 'Bikevana' && 
									<a href={walkthrough} target="_blank" rel="noopener noreferrer">
										<i className="fas fa-external-link-alt"></i>
									</a> 
								} 
							</Col>
						</Row>
					</Col>
				</Row>
			}  
    </Layout>
  )
}

export default Module;