import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <div className={footerStyles.copy}>
          <p>
            <span className={footerStyles.highlight}>
              &copy; Natural Essentials, Inc. All rights reserved
            </span>
          </p>
        </div>
        <div className={footerStyles.address}>
          <p>
            <span className={footerStyles.highlight}>1.3305628022</span>
          </p>
          <p>Natural Essentials Inc.</p>
          <p>115 Lena Drive, Aurora, OH 44202</p>
          <p>US</p>
        </div>
      </div>
      <p className={footerStyles.vanity}>
        Site developed by {data.site.siteMetadata.author} 2021
      </p>
    </footer>
  );
};

export default Footer;
