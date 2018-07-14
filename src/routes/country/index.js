import React from 'react';
import Layout from '../../components/Layout';
import Country from './Country';

const title = '国家介绍';

function action() {
  return {
    chunks: ['country'],
    title,
    component: (
      <Layout>
        <Country title={title} />
      </Layout>
    ),
  };
}

export default action;
