import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import careerStyles from './careers.module.scss';

const Careers = () => {
  const data = useStaticQuery(
    graphql`
      query careers {
        applyNow: file(relativePath: { eq: "images/apply-now.png" }) {
          childImageSharp {
            fluid(maxWidth: 1168) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  const description =
    'Natural Essentials Inc.® offers proactive, ' +
    'solution-oriented individuals a place to start of build a long-term ' +
    'career.  As a hyper-growth company, we are continually looking for the ' +
    'best and brightest to join our team.';

  const indeedUrl =
    'https://www.indeed.com/jobs?q=Natural+Essentials+Inc&l=Aurora%2C+OH';

  const applicationUrl = 'https://naturalessentialsinc.github.io/Careers/';

  return (
    <Layout>
      <Metadata title="Careers" description={description} />
      <div>
        <h1>Our employees make us great!</h1>
        <p>
          Natural Essentials Inc.® offers proactive, solution-oriented
          individuals a place to start to build a long-term career. As a
          hyper-growth company, we are continually looking for the best and the
          brightest to join our team.
        </p>
        <p>
          By joining Natural Essentials Inc.®, you will become part of an
          organization with a competitive and enthusiastic culture that believes
          in promoting from within. We recognize that a company is not a
          building, production lines, equipment, or products, but people. For
          that reason, we are always seeking individuals looking to be part of a
          family and a team. We want individuals who have the desire to build
          something great.
        </p>
        <p>
          At Natural Essentials Inc.®, our people are our most valuable asset.
          One of our openings could be your perfect opportunity!
        </p>
        <h2>Our hiring practices:</h2>
        <p>
          A key element of Natural Essentials Inc.® is our commitment to
          diversity. Natural Essentials Inc.® is an equal opportunity employer.
          We consider applicants and make all employment decisions without
          regard to race, color, religion, creed, gender, national origin, age,
          disability, marital or veteran status, or any other legally protected
          status. We are commited to recruiting and retaining the best talent.
        </p>
        <h2>Our people:</h2>
        <p>
          Natural Essentials Inc.® is a company built on a commitment to
          success.
        </p>
        <h3>Our values:</h3>
        <ul>
          <li>Consistently best quality</li>
          <li>Market-leading pricing</li>
          <li>Collaborative teamwork</li>
          <li>Continual improvement</li>
        </ul>
        <h3>Our character:</h3>
        <ul>
          <li>Integrity</li>
          <li>Honesty</li>
          <li>Enthusiasm</li>
          <li>Persistence</li>
        </ul>
        <p>
          At Natural Essentials Inc.®, these values form the basis of a culture
          focused on growing both our team and our business.
        </p>
        <h2 className={careerStyles.banner}>Apply today</h2>
        <div>
          <Img
            fluid={data.applyNow.childImageSharp.fluid}
            alt="We are looking for naturals like you to join our team."
          />
        </div>
        <p className={careerStyles.tagline}>
          Send in your resume today and join our team!
        </p>
        <h3 className={careerStyles.method}>By mail:</h3>
        <div className={careerStyles.mail}>
          <pre>Natural Essentials Inc.</pre>
          <pre>Attn: Human Resources</pre>
          <pre>115 Lena Drive</pre>
          <pre>Aurora, OH 44202</pre>
        </div>
        <h3 className={careerStyles.method}>By email:</h3>
        <div className={careerStyles.mail}>
          <a
            href="mailto:HR@naturalessentialsinc.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            HR@naturalessentialsinc.com
          </a>
        </div>
        <h3 className={careerStyles.method}>Or apply online:</h3>
        <div className={careerStyles.mail}>
          <a href={indeedUrl} target="_blank" rel="noopener noreferrer">
            Check out our listings on Indeed.com
          </a>
          <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
            ...or, apply from our application portal!
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Careers;
