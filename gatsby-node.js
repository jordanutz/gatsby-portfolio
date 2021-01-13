exports.createPages = async ({ actions, graphql, reporter }) => {
   const result = await graphql(`
      query {
         allMdx {
            nodes {
               frontmatter {
                  slug
               }
            }
         }
      }
   `)

   if (result.errors) {
      reporter.panic('failed to create posts', result.errors);
   }

   const posts = result.data.allMdx.nodes;
   posts.forEach(post => {
      actions.createPage({
         path: post.frontmatter.slug, 
         component: `${__dirname}/src/components/Post/Post.jsx`,
         context: {
            slug: post.frontmatter.slug
         }
      })
   })
}