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
            fluid(maxWidth: 247) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bulkLogo: file(relativePath: { eq: "images/bulk-logo.webp" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stockBeaker: file(relativePath: { eq: "images/stock-beaker.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        contractFilling: file(
          relativePath: { eq: "images/contract-filling.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productDevelopment: file(relativePath: { eq: "images/lab-image.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 525) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        natLogo: file(relativePath: { eq: "images/nat-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
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
        <div className={homePageStyles.jumbo}>
          <h1>Seed to shelf...quality is our promise!</h1>
          <div>
            <p>
              Natural Essentials Inc. is where nature meets science. Our global
              supply chain, coupled with OTC drug manufacturing expertise, has
              allowed us to become one of the nation&apos;s leading suppliers of
              natural ingredients and a global force in contract filling. Today
              Natural Essentials Inc. supplies some of the world&apos;s largest
              brands with quality ingredients and manufacturing services.
            </p>
            <p>
              In addition to being an FDA audited drug facility, we are proud to
              announce that Natural Essentials Inc. is now a certified organic
              manufacturer/handler.
            </p>
            <div className={homePageStyles.certified}>
              <Img
                fluid={data.organic.childImageSharp.fluid}
                alt="Certified Organic Manufacturer"
              />
            </div>
          </div>
        </div>
        <div>
          <div className={homePageStyles.naturalLogo}>
            <Img
              fluid={data.natLogo.childImageSharp.fluid}
              alt="Natural Essentials Inc.®"
            />
          </div>
          <p className={homePageStyles.lead}>
            At Natural Essentials Inc., we are obsessed with offering the latest
            and greatest natural ingredients. From a line of therapeutic grade
            essential oils and blends to natural butters, waxes, oils, and
            botanicals. We have the expertise and global relationships to offer
            the highest quality ingredients at market leading prices.
          </p>
          <div>
            <h2>In stock always:</h2>
            <div className={homePageStyles.imagePanel}>
              <div>
                <p>
                  We stock more than 1 million lbs. of over 2,000 natural
                  ingredients available to ship today from our 260,000 square
                  foot facility. These ingredients are available for purchase,
                  conveniently, online from our web division at{' '}
                  <a
                    href="https://www.bulkapothecary.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bulkapothecary.com
                  </a>
                  .
                </p>
                <div className={homePageStyles.bulk}>
                  <Img
                    fluid={data.bulkLogo.childImageSharp.fluid}
                    alt="Bulk Apothecary"
                  />
                </div>
              </div>
              <div className={homePageStyles.panelImage}>
                <Img
                  fluid={data.stockBeaker.childImageSharp.fluid}
                  alt="Ingredients in stock"
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Product development:</h2>
            <div className={homePageStyles.imagePanelAlt}>
              <div className={homePageStyles.panelTextAlt}>
                <p>
                  We offer product formulation and testing services for a broad
                  range of products, including OTC drugs, cosmetics, and
                  industrial applications. With over 24 years of experience, our
                  team has the knowledge and relationships to develop
                  commercially viable products for countless applications.
                </p>
              </div>
              <div className={homePageStyles.panelImageAlt}>
                <Img
                  fluid={data.productDevelopment.childImageSharp.fluid}
                  alt="Product development"
                />
              </div>
            </div>
          </div>
          <div>
            <h2>Co-packing/contract filling:</h2>
            <div className={homePageStyles.imagePanel}>
              <div>
                <p>
                  Natural Essentials Inc. is a full-scale FDA audited drug
                  facility. With the capacity to fill over 750,000 units per day
                  of various liquid products in package sizes ranging from 5 mL
                  to 55-gallon drums, our broad range includes lip balm stick
                  filling, tubes, bottles, jars, vials, sample packs, drums,
                  pails, and more.
                </p>
              </div>
              <div className={homePageStyles.panelImage}>
                <Img
                  fluid={data.contractFilling.childImageSharp.fluid}
                  alt="Contract filling/co-packing"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
