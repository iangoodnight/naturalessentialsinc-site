import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import homePageStyles from './home.module.scss';

const Index = () => {
  const data = useStaticQuery(
    graphql`
      query HomePage {
        organic: file(relativePath: { eq: "images/organic-cert.png" }) {
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
    <Layout>
      <Metadata title="Home" />
      <div id="main">
        <h1 className={homePageStyles.banner}>
          Seed to shelf...quality is our promise!
        </h1>
        <div className={homePageStyles.lead}>
          <p>
            Natural Essentials Inc.® is where nature meets science. Our global
            supply chain coupled with expertise in OTC drug manufacturing has
            allowed us to become one of the nation&apos;s leading suppliers of
            natural ingrediends and a global force in contract filling. Today
            Natural Essentials Inc.® supplies some of the world&apos;s largest
            brands with quality ingredients and manufacturing services.
          </p>
          <p>
            In addition to being an FDA audited drug facility, we are proud to
            announce that Natural Essentials Inc.® is also now a Certified
            Organic Manufacturer/Handler.
          </p>
          <div className={homePageStyles.certified}>
            <Img
              fluid={data.organic.childImageSharp.fluid}
              alt="Certified Organic Manufacturer"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
