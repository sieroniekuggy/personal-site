module.exports = {
  siteMetadata: {
    title: `Silence Ronald | Full-Stack Developer`,
    author: `Silence Ronald Kugotsi`,
    role: `Full-Stack Developer & DevOps Specialist`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Silence Ronald | Full-Stack Developer`,
        short_name: `Silence Ronald`,
        start_url: `/`,
        background_color: `#02D463`,
        theme_color: `#02D463`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
