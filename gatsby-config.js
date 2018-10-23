module.exports = {
  siteMetadata: {
    title: '測試用寵物展',
    description: 'Feel free to use your own designs and apply your own styling. You can also use my Figma design if you wish to follow exactly what I have. You can access all the React files and images here.',
    keywords:'key,word,to,where',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'd0cm1u00r36g',
        accessToken: '105caa0f3b087c6f30164b97d9f5337bd5500a3a0d9110d98a082826f5119ddb'
      }
    }
  ],
}
