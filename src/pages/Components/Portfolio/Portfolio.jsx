import React, {useRef, useState} from 'react';
import './Portfolio.less';

// Components
import {Layout, Row, Col, Button} from 'antd';
import Module from '../Module/Module';
import Project from '../Project/Project';
import {portfolioData} from './PortfolioData';
import Archive from '../Archive/Archive';

const Portfolio = ({portfolio}) => {

    const [toggle, setToggle] = useState(false);
    const archive = useRef();

    const displayPersonal = portfolioData.map(project => {
        if (project.portfolio) {
            return (
               <Col xs={24} className="portfolio__grid" key={project.id}>
                  <Module {...project}  />
               </Col>
            )
        } 
        return null;
    });

    const smallProjects = portfolioData.map(project => {
        if (!project.portfolio) {
            return (     
                <Col xs={24} sm={12} lg={8} key={project.id}>
                     <Project {...project} />
               </Col>  
            )
        }
        return null;
    });

    return (
        <Layout className="portfolio">
            <Row>
                <Col xs={24}>
                    <h2>Portfolio</h2>
                </Col>
            </Row>
            <Row>
                {displayPersonal}
            </Row>
            <Row>
                <Col xs={24} className="portfolio__archive">
                    <h4>Project Archive</h4>
                    <Row gutter={24} className='portfolio__archive-projects'>
                        { toggle ? <Archive archive={archive} /> : smallProjects} 
                    </Row>
                    <Button
                        type='link'
                        className='portfolio__link' 
                        onClick={() => setToggle(!toggle)}>
                        { toggle ? 'Return' : 'View More' }
                    </Button>
                </Col>
            </Row>
        </Layout>
    )
};

export default Portfolio;