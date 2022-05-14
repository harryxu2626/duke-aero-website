module.exports = {
  siteMetadata: {
    title: `Duke AERO`,
    defaultTitleTemplate: `%s | Duke AERO`,
    description: `Duke University's High-Powered Rocketry Club`,
    url: `https://dukerocketry.com`,
    image: `./src/images/aerocropped.png`,
    keywords: `duke, rocketry, aero, aerospace, rockets`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/favicon.png",
      },
    },
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://dukerocketry.com`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
