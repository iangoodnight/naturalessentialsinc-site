import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Header from './header';
import Footer from './footer';
import '../styles/style.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        logo: file(relativePath: { eq: "images/nat-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.mainContent}>{props.children}</div>
        <div className={layoutStyles.logo}>
          <Img
            fluid={data.logo.childImageSharp.fluid}
            alt="Natural Essentials Inc.®"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
