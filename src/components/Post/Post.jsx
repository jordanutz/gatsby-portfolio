import React from 'react';
import './Post.less';
import { graphql, Link } from 'gatsby';
import Wrapper from '../Wrapper/Wrapper';
import { MDXProvider } from "@mdx-js/react"

export const query = graphql`
   query($slug: String!) {
      mdx(frontmatter: { slug: { eq: $slug}}) {
         frontmatter {
            title
            author
         }
         body
      }
   }
`

const Post = ({ data: { mdx: post } }) => {
   return (
      <Wrapper>
         <h1>{post.frontmatter.title}</h1>
         <p>{post.frontmatter}</p>
         <MDXProvider>
            {post.body}
         </MDXProvider>
         <Link to='/blog'>Return to All Posts</Link>
      </Wrapper>
   )
}

export default Post;