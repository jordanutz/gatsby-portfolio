import React from 'react';
import './Skills.less';

// Components
import { Layout, Row, Col } from 'antd';
import { frontEnd, backEnd, workflow} from './SkillsData';
import Skill from './Skill';

const Skills = ({skills}) => {
    return (
       <div ref={skills}>
          <Layout className="skills">
            <Row className='skills__row'>
               <Col xs={24} sm={{span: 20, offset: 1}} lg={{span: 24, offset: 0}}>
                  <h2 className='skills__header'>Skills</h2>
               </Col>
            </Row>
            <Row gutter={54}>
               <Col xs={24} sm={{span: 18, offset: 2}} lg={{span: 12, offset: 0}} className='skills__col'>
                  <h3>Front End Dev.</h3>
                  <Row className='skills__front'>
                        <Skill technologies={frontEnd.technologies} />
                  </Row>
               </Col>
               <Col xs={24} sm={{span: 18, offset: 2}} lg={{span: 12, offset: 0}} className='skills__col'>
                  <Row>
                        <Col xs={24} className='skills__back'>
                           <h3>Back End Dev.</h3>
                           <Row>
                              <Skill technologies={backEnd.technologies} />
                           </Row>
                        </Col>
                        <Col xs={24} className='skills__work'>
                           <h3>Workflow</h3>
                           <Row>
                              <Skill technologies={workflow.technologies} />
                           </Row>
                        </Col>
                  </Row>
               </Col>
            </Row>
         </Layout> 
       </div>
    )
}

export default Skills;