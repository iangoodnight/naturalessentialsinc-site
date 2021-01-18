/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const description =
  'Natural Essentials Inc.® is a full-scale OTC drug manufacturer and ' +
  'contract filler of essential oils, natural ingredients, and more.  Call ' +
  'today about our co-packing services.';

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Natural Essentials Inc.',
    description: description,
    author: 'Ian Goodnight',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natural Essentials Inc.`,
        short_name: `Natural Essentials`,
        start_url: `/`,
        display: `standalone`,
        background_color: `#fff`,
        theme_color: `#432b1c`,
        icon: `src/images/logo-large-square.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
