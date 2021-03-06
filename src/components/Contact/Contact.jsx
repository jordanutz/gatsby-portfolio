import React from 'react';
import './Contact.less';

// Components
import { Layout, Row, Col } from 'antd';

const Contact = ({contact}) => {
    return (
       <div ref={contact} data-sal="fade" data-sal-easing="ease-in-out" data-sal-duration="3000">
          <Layout className="contact">
               <Row>
                  <Col xs={24}>
                     <section className="contact__overview">
                           <h2>Contact</h2>
                           <p>I <span role="img" aria-label="love">💜</span> my job, so I'm currently not seeking any employment opportunities at this time, but if you'd like to discuss a freelance opportunity please drop me a line and I will do my best to answer your email as soon as I can!</p>
                           <a href="mailto:jordanutz@outlook.com" target="_blank" rel="noopener noreferrer">
                              <button>Drop a Line</button>
                           </a>
                     </section>
                  </Col>
               </Row>
         </Layout>
       </div>
    )
};

export default Contact;