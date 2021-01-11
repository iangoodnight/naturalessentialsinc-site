import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout.js';
import Metadata from '../components/metadata';
import coPackStyles from './co-packing.module.scss';

const CoPacking = () => {
  const data = useStaticQuery(
    graphql`
      query coPacking {
        lipBalmFilling: file(
          relativePath: { eq: "images/lip-balm-filling.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 718) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Metadata
        title="Co-packing"
        description="We currently offer a wide range of co-packing and private label manufacturing services including liquid filling, blister packing, kitting, specialty compounding, and custom formulations to name a few. It is important to note that our service offerings are constantly evolving."
      />
      <div>
        <h1>Co-packing / Private Label Manufacturing Services</h1>
        <p>
          We currently offer a wide range of co-packing and private label
          manufacturing services including liquid filling, blister packing,
          kitting, specialty compounding, and custom formulations to name a few.
          It is important to note that our service offerings are constantly
          evolving.
        </p>
        <div>
          <h2 className={coPackStyles.sectionTitle}>Core Service Offerings:</h2>
        </div>
        <div>
          <div>
            <h3>Lip Balm Contract Filling</h3>
            <p className={coPackStyles.explainer}>
              Natural Essentials Inc.® currently has a lip balm stick filling
              capacity of over 50 million units per year and growing. Top that
              with a capacity to fill 70 million lip balm jars annually and
              millions of lip gloss tubes, it is easy to see why we are a go-to
              source for lip balm manufacturing. We currently manyfacture small
              lip balm runs starting at only 5,000 units and have many customers
              that run 1 million or more per run. In addition to our custom lip
              balm filling, we currently stock over 20 SKU&apos;s of
              &ldquo;stock lip balm&rdquo; in clear, white, and black sticks
              that are in stock ready to be labeled for promotional customers.
              Whatever your needs, Natural Essentials Inc.® has the capacity to
              fill them quickly and economically.
            </p>
            <div className={coPackStyles.demoWide}>
              <Img
                fluid={data.lipBalmFilling.childImageSharp.fluid}
                alt="Lip balm filling"
              />
            </div>
          </div>
          <div>
            <h3>Tube Contract Filling</h3>
            <p className={coPackStyles.explainer}>Lorem Ipsum yadda yadda</p>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoPacking;
