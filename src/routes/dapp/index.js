import React from 'react';
import Layout from '../../components/Layout';
import Dapp from './Dapp';

const title = '市井';

function action() {
  return {
    chunks: ['dapp'],
    title,
    component: (
      <Layout>
        <Dapp title={title} />
      </Layout>
    ),
  };
}

export default action;
