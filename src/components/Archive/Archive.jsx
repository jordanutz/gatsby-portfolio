import React, {useEffect, useState} from 'react';
import './Archive.less';

import { Layout, Row, Col, Table, Tag, Space } from 'antd';
import { ImGithub, ImCodepen } from 'react-icons/im';
import { archiveData } from './ArchiveData';

const Archive = ({archive}) => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // archive.current.scrollIntoView({ block: "end", behavior: 'smooth' });

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, [archive, isLoading]);

  const columns = [
      {
        title: 'Year',
        dataIndex: 'year',
        key: 'year',
        width: 50
      },
      {
        title: 'Project',
        dataIndex: 'project',
        key: 'project',
      },
      {
        title: 'Goal',
        dataIndex: 'goal',
        key: 'goal',
        width: 300,
      },
      {
        title: 'Technologies',
        key: 'technologies',
        dataIndex: 'technologies',
        width: 300,
        render: tags => (
          <>
            {tags.map(tag => {
              return (
                <Tag 
                  key={tag.id} 
                  className={`archive__tag ${tag.type === 'front' ? 'archive__tag--front' : 'archive__tag--back'}`}>
                  {tag.tag}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Links',
        key: 'links',
        width: 100,
        render: (text, record) => (
          <Space size="middle">
              {
                record.github &&
                <a href={record.github} className='archive__link' target="_blank" rel="noopener noreferrer">
                  <ImGithub/>
                </a>
              }
              {
                record.codepen &&
                <a href={record.codepen} className='archive__link' target="_blank" rel="noopener noreferrer">
                  <ImCodepen />
              </a>
              }
          </Space>
        ),
      }
    ];

   return (
      <Layout className='archive'>
         <Row type='flex' justify='center'>
            <Col xs={24}>
               <Table 
                  bordered={false}
                  className='archive__table'
                  columns={columns} 
                  dataSource={archiveData}
                  pagination={false}
                  scroll={{x: 'max-content'}}
                  loading={isLoading}
               /> 
            </Col>
         </Row>
      </Layout>
   )
};

export default Archive;