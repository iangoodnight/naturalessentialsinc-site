import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import thankYouStyles from './thank-you.module.scss';

const ThankYou = () => {
  return (
    <Layout>
      <Metadata
        title="Thank you"
        description="Thank you for your form submission"
      />
      <div className={thankYouStyles.centerScreen}>
        <p>Thank you for your form submission!</p>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  );
};

export default ThankYou;
