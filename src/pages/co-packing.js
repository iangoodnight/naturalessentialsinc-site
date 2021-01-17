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
        tubeFilling: file(relativePath: { eq: "images/tube-filling.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 718) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bottleFilling: file(relativePath: { eq: "images/bottle-filler.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 718) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jarFilling: file(relativePath: { eq: "images/jar-filling.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 718) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        samplePackets: file(relativePath: { eq: "images/sample-packet.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 575) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        secondaryPackaging: file(
          relativePath: { eq: "images/secondary-packaging.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blisterBurst: file(relativePath: { eq: "images/burst.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        halo: file(relativePath: { eq: "images/halo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 175) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const description =
    'We currently offer a wide range of co-packing and ' +
    'private label manufacturing services including, liquid filling, blister ' +
    'packing, kitting, specialty compounding, and customer formulations, to ' +
    'name a few.  It is important to note that our service offerings are ' +
    'continually evolving.';

  return (
    <Layout>
      <Metadata title="Co-packing" description={description} />
      <div>
        <h1>Co-packing/private label manufacturing services</h1>
        <p>
          We currently offer a wide range of co-packing and private label
          manufacturing services, including liquid filling, blister packing,
          kitting, specialty compounding, and custom formulations, to name a
          few. It is important to note that our service offerings are
          continually evolving.
        </p>
        <div>
          <h2 className={coPackStyles.sectionTitle}>Core service offerings:</h2>
        </div>
        <div>
          <div className={coPackStyles.article}>
            <h3 className={coPackStyles.competencies}>
              Lip Balm Contract Filling
            </h3>
            <p className={coPackStyles.explainer}>
              Natural Essentials Inc. currently has a lip balm stick filling
              capacity of over 50 million units per year and growing. Top that
              with an ability to produce 70 million lip balm jars annually and
              millions of lip gloss tubes, it is easy to see why we are a go-to
              source for lip balm manufacturing. We currently manufacture small
              lip balm runs starting at only 5,000 units and have many customers
              ordering 1 million or more per run. In addition to our custom lip
              balm filling, we currently stock over 20 SKU&apos;s of &quot;stock
              lip balm&quot; in clear, white, and black sticks in stock, ready
              to be labeled for promotional customers. Whatever your needs,
              Natural Essentials Inc. can fill them quickly and economically.
            </p>
            <div className={coPackStyles.demoWide}>
              <Img
                fluid={data.lipBalmFilling.childImageSharp.fluid}
                alt="Lip balm filling"
              />
            </div>
          </div>
          <div className={coPackStyles.article}>
            <h3 className={coPackStyles.competencies}>Tube Contract Filling</h3>
            <p className={coPackStyles.explainer}>
              Natural Essentials Inc. currently fills squeezable plastic tubes
              ranging in size from .25 oz. up to 8 oz. We currently operate four
              tube-fillers, including a 2-head ultrasonic sealer for those tough
              jobs that require tube sealing through heavy ointments or balms.
              Our current capacity for filling plastic tubes is roughly 250,000
              units per day, depending on the tube size and product consistency.
              Minimum runs on tube-filling start at only 10,000 units.
            </p>
            <div className={coPackStyles.demoWide}>
              <Img
                fluid={data.tubeFilling.childImageSharp.fluid}
                alt="Tube filling"
              />
            </div>
          </div>
          <div className={coPackStyles.article}>
            <h3 className={coPackStyles.competencies}>Bottle Filling</h3>
            <p className={coPackStyles.explainer}>
              Natural Essentials Inc. currently has a bottle filling capacity of
              well over 100 million units per year and growing. When it comes to
              bottle capability to fill bottle sizes ranging from 3 mL up to
              gallon jugs and everything in between. However, what makes us
              stand out is our ability to offer product filling ranging from
              water thin, foaming products to heavy ointments and creams.
              Whether you&apos;re looking for a hot or cold pour, at Natural
              Essentials Inc., we have a range of equipment for almost any need.
            </p>
            <div className={coPackStyles.demoWide}>
              <Img
                fluid={data.bottleFilling.childImageSharp.fluid}
                alt="Bottle filling"
              />
            </div>
          </div>
          <div className={coPackStyles.article}>
            <h3 className={coPackStyles.competencies}>Jar Filling</h3>
            <p className={coPackStyles.explainer}>
              Jar filling can be more complicated than people think. Often,
              products sold in jars are thick ointments and creams requiring
              heat, large heads, and specialized equipment to efficiently fill
              the product. We currently have a capacity of well over 100 million
              units per year and growing. When it comes to jar filling, we can
              fill jars ranging from 3 mL up to 1-gallon pails and everything in
              between. Furthermore, most of our filling lines come outfitted
              with jacketed tanks, which allows us to facilitate hot pour
              products with ease. In addition to this, we have multiple
              induction sealers allowing us to fill jars and seal them inline
              without added cost. Along with filling simple products, we have
              also worked on many projects that require multiple pours, such as
              salt and sugar scrubs. Regardless of your needs, chances are
              Natural Essentials Inc. can offer a solution that is both
              economical and timely.
            </p>
            <div className={coPackStyles.demoWide}>
              <Img
                fluid={data.jarFilling.childImageSharp.fluid}
                alt="Jar filling"
              />
            </div>
          </div>
          <div className={coPackStyles.last}>
            <div className={coPackStyles.article}>
              <h3 className={coPackStyles.competencies}>
                Sample Packet Filling / High-speed Form-fill Seal
              </h3>
              <p className={coPackStyles.explainer}>
                Natural Essentials Inc. currently operates multiple vertical
                form-fill-seal machines allowing us to be highly competitive at
                filling sample packets and other flexible packagings. With a
                capacity of 400,000 units per day and run sizes starting at just
                50,000, Natural Essentials Inc. can satisfy customers of all
                sizes.
              </p>
              <div className={coPackStyles.demoWide}>
                <Img
                  fluid={data.samplePackets.childImageSharp.fluid}
                  alt="Sample packet filling"
                />
              </div>
            </div>
            <div className={coPackStyles.article}>
              <h3 className={coPackStyles.competencies}>
                Secondary Packaging (High-speed cartoning, blistering, shrink
                wrapping, and kitting)
              </h3>
              <p className={coPackStyles.explainer}>
                Natural Essentials Inc. currently operates 5 Alloyd rotary
                blister machines giving us a capacity of almost 300,000 units
                per day. In addition to this, we also offer countless other
                secondary packaging services such as high-speed cartoning,
                shrink wrapping, display packing, and more, all under one roof.
                At Natural Essentials Inc., we never outsource secondary
                packaging, so you can rest assured your entire project comes
                together seamlessly the first time, every time.
              </p>
              <div className={coPackStyles.gallery}>
                <Img
                  className={coPackStyles.galleryImage}
                  fluid={data.blisterBurst.childImageSharp.fluid}
                  alt="BLister packaging"
                />
                <Img
                  className={coPackStyles.galleryImage}
                  fluid={data.secondaryPackaging.childImageSharp.fluid}
                  alt="Secondary packaging (high-speed cartoning, blistering, shrink wrapping, and kitting)"
                />
                <Img
                  className={coPackStyles.galleryImage}
                  fluid={data.halo.childImageSharp.fluid}
                  alt="Secondary packaging"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoPacking;
