/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const { createProxyMiddleware } = require('http-proxy-middleware');

const description =
  'Natural Essentials Inc.® is a full-scale OTC drug manufacturer and ' +
  'contract filler of essential oils, natural ingredients, and more.  Call ' +
  'today about our co-packing services.';

module.exports = {
  /* Your site config here */
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      createProxyMiddleware({
        target: 'http:/localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      })
    );
  },
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
        background_color: `#f7f0eb`,
        theme_color: `#6b8e3c`,
        icon: `src/images/natural-essentials-favicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
};
