import React from 'react';
import { Col, Tag } from 'antd';

const Skill = ({technologies}) => {
   return (
      technologies.map(skill => {
         return (
            <Col xs={8} md={6} lg={8} className='skills__tag' key={skill.id}>
               <Tag icon={skill.icon}>
                  {skill.value}
               </Tag>
            </Col>
         )
      })
   )
}

export default Skill;