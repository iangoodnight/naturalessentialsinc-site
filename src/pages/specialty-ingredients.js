import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout.js';
import Metadata from '../components/metadata';
import '../components/pageImage.js';
import specialtyStyles from './specialtyIngredients.module.scss';

const Specialty = () => {
  const data = useStaticQuery(
    graphql`
      query {
        organic: file(relativePath: { eq: "images/organic-cert.png" }) {
          ...pageImage
        }
        essentialOil: file(relativePath: { eq: "images/essential-oil.jpg" }) {
          ...pageImage
        }
        herbsAndBotanicals: file(
          relativePath: { eq: "images/herbs-and-botanicals.jpg" }
        ) {
          ...pageImage
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
            <h1>Seed to shelf...quality is our promise!</h1>
            <p>
              It&apos;s not just a slogan, but a philosophy we live by. At
              Natural Essentials we understand that quality is everything!
            </p>
          </div>
          <div className={specialtyStyles.columnImage}>
            <Img
              fluid={data.organic.childImageSharp.fluid}
              alt="Certifed organic manufacturer"
            />
          </div>
        </div>
        <div>
          <h2>Core competencies:</h2>
          <div className={specialtyStyles.row}>
            <div className={specialtyStyles.columnImage}>
              <Img
                fluid={data.essentialOil.childImageSharp.fluid}
                alt="Essential oils"
              />
            </div>
            <div className={specialtyStyles.columnInfo}>
              <h3>Essential Oils</h3>
              <p>
                Natural Essentials started it&apos;s specialty ingredient
                division with a full selection of pure grade essential oils.
                With over 200 variations of conventional and certified organic
                essential oils and an ever-growing stock offering of the most
                popular blended products, today Natural Essentials is one of the
                largest and well-respected suppliers of essential oils in North
                America. We stock thousands of pounds of the world&apos;s most
                precious oils in our 260,000 foot distribution warehouse and
                offer some of the world&apos;s best pricing and consistent
                supply on industry staples such as lavender and peppermint oil.
                Many of these oils are shipped out same day to customers all
                over the world. To our knowledge there is not another company in
                all of North America that has an infrastructure and supply chain
                for essential oils that can compete with Natural Essentials.
                Over the past 5 years we have developed relationships with
                producers and suppliers to ensure quality, consistency and
                availability when other can&apos;t. For this reason, some of the
                nation&apos;s largest brands depend on our essential oils for
                their products and our oils can be found in products at almost
                every retailer in North America.
              </p>
            </div>
          </div>
        </div>
        <div className={specialtyStyles.row}>
          <div className={specialtyStyles.columnImage}>
            <Img
              fluid={data.herbsAndBotanicals.childImageSharp.fluid}
              alt="Herbs and botanicals"
            />
          </div>
          <div className={specialtyStyles.columnInfo}>
            <h3>Herbs and Botanicals</h3>
            <p>
              In 2014 Natural Essentials acquired the Botanical division of
              Lebermuth after over 100 years in operation. At the time Lebermuth
              had hundreds of customers, an impeccable reputation for quality
              and customer service and strong direct source relationships with
              fields and farms supplying top quality herbs and botanicals. That
              single acquisition made us a powerhouse in the world of dried
              botanicals, herbs and spices. Armed with farm direct relationships
              we quickly became a dominant force in the distribution of a
              complete line of more than 1,500 herb and botanical variations.
              Today, we have expanded that distribution network by offering our
              premium line of botanicals in smaller quantities at wholesale
              prices thru our web distribution division at
              www.bulkapothecary.com
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Specialty;
