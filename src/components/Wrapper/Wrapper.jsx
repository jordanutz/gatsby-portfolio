import React from 'react';
import { Layout } from 'antd';

import Helmet from 'react-helmet'

const Wrapper = ({children}) => {
   return (
      <Layout>
         <Helmet>
            <html lang='en' />
            <title>Jordan Utz | Front End Software Engineer</title>
            <meta name='description' content='Portfolio site for Jordan Utz' />
         </Helmet>
         {children}
      </Layout>
   )
}

export default Wrapper;