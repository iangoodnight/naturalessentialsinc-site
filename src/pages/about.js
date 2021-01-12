import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout.js';
import Metadata from '../components/metadata';
import aboutStyles from './about.module.scss';

const About = () => {
  const data = useStaticQuery(
    graphql`
      query About {
        streetView: file(relativePath: { eq: "images/street-view.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1168) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        naturalLogo: file(relativePath: { eq: "images/nat-logo.png" }) {
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
      <Metadata title="About Natural Essentials Inc." />
      <div>
        <h1>
          A Proven Leader in Specialty Ingredient Distribution and OTC Drug
          Manufacturing
        </h1>
        <p>
          Natural Essentials Inc.® is one of the nation&apos;s fastest-growing
          privately-held specialty ingredient distributors and OTC drug
          manufacturers, serving customers in retail and institutions throughout
          North America for more than 20 years. Natural Essentials Inc.®&apos;s
          success has revolved around our commitment to providing fantastic
          service, quality, and cost while building long-term, mutually
          beneficial relationships with our customers across multiple channels,
          including retailers, consumer products companies, and private brand
          manufacturers. We fully understand the critical role we play for each
          of our customers&apos; success and help create competitive solutions
          for every one of our customers&apos; needs.
        </p>
        <p>
          Industry-leading commitment to low-cost supply and vast regulatory
          experience uniquely positions Natural Essentials Inc.® to quickly meet
          and exceed our customers&apos; demands. With three manufacturing and
          distribution facilities totaling over 300,000 square feet, we process
          and ship thousands of orders daily, representing one of the
          fastest-growing, privately-held manufacturers/distributors in North
          America.
        </p>
        <h2>Our approach:</h2>
        <p>
          Natural Essentials Inc.® understands consumer behavior and competitive
          hurdles, enabling us to tailor solutions and product offerings to meet
          today&apos;s consumers&apos; unique needs. We build strategic
          partnerships with our suppliers and customers to ensure a seamless
          process on every project. Our vertically integrated approach, starting
          with global farm-direct relationships, allows us to ensure consistent
          supply. That, coupled with the fact that we operate our own private
          manufacturing facility, empowers us to meet some of the most
          aggressive deadlines with ease.
        </p>
        <p>
          Our dedication and commitment to sourcing and producing superior
          products at an extraordinary value while providing on-time and
          consistent service has been recognized by our customers, allowing us
          to become a global force in recent years.
        </p>
        <div>
          <Img
            fluid={data.streetView.childImageSharp.fluid}
            alt="Natural Essentials Inc.®, street-view"
          />
        </div>
        <div className={aboutStyles.logo}>
          <Img
            fluid={data.naturalLogo.childImageSharp.fluid}
            alt="Natural Essentials Inc.®"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
