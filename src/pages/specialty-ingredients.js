import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout.js';
import Metadata from '../components/metadata';
import specialtyStyles from './specialtyIngredients.module.scss';

const Specialty = () => {
  const data = useStaticQuery(
    graphql`
      query {
        organic: file(relativePath: { eq: "images/organic-cert.png" }) {
          childImageSharp {
            fluid(maxWidth: 266) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        essentialOil: file(relativePath: { eq: "images/essential-oil.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 266) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        herbsAndBotanicals: file(
          relativePath: { eq: "images/herbs-and-botanicals.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 266) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        bulkLogo: file(relativePath: { eq: "images/bulk-logo.webp" }) {
          childImageSharp {
            fluid(maxWidth: 266) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Metadata
        title="Specialty Ingredients"
        description="In 2010 we started our specialty ingredient division and set out on a mission to provide consistent supply, unrivaled selection and unmatched quality at market leading prices to companies with a level of custoemr service that would one day become the benchmark for which all other competitors would strive for. Years later this mission would prove to be successful as we became one of the Nation's leading suppliers of natural ingredients including therapeutic grade essential oils, butters, waxes, oils, and botanicals."
      />
      <div>
        <div className={specialtyStyles.row}>
          <div className={specialtyStyles.columnInfo}>
            <h1>Seed to shelf... quality is our promise!</h1>
            <p>
              It&apos;s not just a slogan, but a philosophy we live by. At
              Natural Essentials Inc., we understand that quality is everything!
            </p>
          </div>
          <div className={specialtyStyles.columnImage}>
            <Img
              fluid={data.organic.childImageSharp.fluid}
              alt="Certified organic manufacturer"
            />
          </div>
        </div>
        <div>
          <h2>Core competencies:</h2>
          <div className={specialtyStyles.articlesContent}>
            <div>
              <h3 className={specialtyStyles.competencies}>Essential Oils</h3>
              <div className={specialtyStyles.articleImage}>
                <Img
                  fluid={data.essentialOil.childImageSharp.fluid}
                  alt="Essential oils"
                />
              </div>
              <p>
                Natural Essentials Inc. started its specialty ingredient
                division with a full selection of pure grade essential oils.
                With over 200 variations of conventional and certified organic
                essential oils and an ever-growing stock offering of the most
                popular blended products, today Natural Essentials Inc. is one
                of the largest and well-respected suppliers of essential oils in
                North America. We stock thousands of pounds of the world&apos;s
                most precious oils in our 260,000-foot distribution warehouse
                and offer some of the world&apos;s best pricing and consistent
                supply on industry staples such as lavender and peppermint oil.
                Many of these oils are shipped out the same day to customers all
                over the world. To our knowledge, there is not another company
                in all of North America that has an infrastructure and supply
                chain for essential oils that can compete with Natural
                Essentials Inc. Over the past five years, we have developed
                relationships with producers and suppliers to ensure quality,
                consistency, and availability when others can&apos;t. For this
                reason, some of the nation&apos;s largest brands depend on our
                essential oils for their products, and you can find our oils in
                products at almost every retailer in North America.
              </p>
            </div>
            <div>
              <h3 className={specialtyStyles.competencies}>
                Herbs and Botanicals
              </h3>
              <div className={specialtyStyles.articleImage}>
                <Img
                  fluid={data.herbsAndBotanicals.childImageSharp.fluid}
                  alt="Herbs and botanicals"
                />
              </div>
              <p>
                In 2014 Natural Essentials Inc. acquired the Botanical division
                of Lebermuth after over 100 years in operation. At the time,
                Lebermuth had hundreds of customers, an impeccable reputation
                for quality and customer service, and strong direct source
                relationships with fields and farms supplying top-quality herbs
                and botanicals. That single acquisition made us a powerhouse in
                the world of dried botanicals, herbs, and spices. Armed with
                farm-direct relationships, we quickly became a dominant force,
                distributing a complete line of more than 1,500 herb and
                botanical variations. Today, we have expanded that distribution
                network by offering our premium line of botanicals in smaller
                quantities at wholesale prices through our web distribution
                division at{' '}
                <a
                  href="https://www.bulkapothecary.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  bulkapothecary.com
                </a>
                .
              </p>
              <div className={specialtyStyles.logo}>
                <Img
                  fluid={data.bulkLogo.childImageSharp.fluid}
                  alt="Bulk Apothecary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Specialty;
