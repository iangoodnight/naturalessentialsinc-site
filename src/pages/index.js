import React from 'react';
import Layout from '../components/layout';
import Metadata from '../components/metadata';
import homePageStyles from './home.module.scss';

const Index = () => {
  return (
    <Layout>
      <Metadata title="Home" />
      <div id="main">
        <h1 className={homePageStyles.banner}>
          Seed to shelf...quality is our promise!
        </h1>
        <div className={homePageStyles.lead}>
          <p>Natural Essentials Inc.®</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
