import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import { Link } from 'gatsby';

const NotFound = () => {
  return (
    <Layout>
      <Metadata title="OOPS!" description="Page not found!" />
      <h1>404: Page Not Found</h1>
      <p>
        <Link to="/blog/">Check out our latest articles</Link>
      </p>
    </Layout>
  );
};

export default NotFound;
