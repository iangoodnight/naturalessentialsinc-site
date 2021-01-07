import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';

const Contact = () => {
  return (
    <Layout>
      <Metadata title="Contact" description="Contact us" />
      <div>
        <h1>Contact Page</h1>
        <p>You can find me here. Cache me outside</p>
      </div>
    </Layout>
  );
};

export default Contact;
