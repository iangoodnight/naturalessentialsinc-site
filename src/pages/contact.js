import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';

const Contact = () => {
  return (
    <Layout>
      <Metadata title="Contact" description="Contact us" />
      <div>
        <h1>Contact us:</h1>
        <div>
          <div>
            <h2>Primary distribution/sales</h2>
          </div>
          <div>
            <pre>115 Lena Drive</pre>
            <pre>Aurora, OH</pre>
            <pre>44202</pre>
          </div>
        </div>
        <p>You can find me here. Cache me outside</p>
      </div>
    </Layout>
  );
};

export default Contact;
