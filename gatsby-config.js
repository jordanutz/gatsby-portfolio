module.exports = {
  siteMetadata: {
    title: 'Jordan Utz | Front End Software Engineer'
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    {
      resolve: 'gatsby-plugin-scroll-reveal'
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