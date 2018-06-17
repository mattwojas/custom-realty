module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: "GatsbyJS",
          short_name: "GatsbyJS",
          start_url: "/",
          background_color: "#f7f0eb",
          theme_color: "#a2466c",
          display: "minimal-ui",
          icon: "src/images/icon.png", // This path is relative to the root of the site.
        },
      },
      `gatsby-plugin-sass`,
      `gatsby-plugin-offline`
    ],
  };