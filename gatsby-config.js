module.exports = {
  siteMetadata: {
    title: 'Jordan Utz | Front End Software Engineer'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-plugin-mdx', 
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/components/Wrapper/Wrapper.jsx`
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem', 
      options: {
        name: 'entries', 
        path: `${__dirname}/src/entries/`
      }
    },
    {
      resolve: 'gatsby-plugin-antd', 
      options: {
        style: true
      }
    }, 
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
            javascriptEnabled: true,
        }
      }
    }, 
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `nunito\:200,300,400,600,700`
        ]
      }
    }
  ]
}