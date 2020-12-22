import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import PostPreview from '../components/PostPreview/PostPreview';
import Wrapper from '../components/Wrapper/Wrapper';
import usePosts from '../hooks/use-posts';

import { Layout } from 'antd';
const { Content} = Layout;

const Blog = () => {
   const posts = usePosts();

   return (
      <Wrapper>
         <Navigation />
         <Content>
            {posts.map(post => (
               <PostPreview key={post.slug} post={post} />
            ))}
         </Content>
      </Wrapper>
   )
}

export default Blog;