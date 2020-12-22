import React from 'react';
import { Layout } from 'antd';

import Helmet from 'react-helmet'
import useSiteMetadata from '../../hooks/use-sitemetadata'

const Wrapper = ({children}) => {

   const { title } = useSiteMetadata();

   return (
      <Layout>
         <Helmet>
            <html lang='en' />
            <title>{title}</title>
            <meta name='description' content='site description' />
         </Helmet>
         {children}
      </Layout>
   )
}

export default Wrapper;