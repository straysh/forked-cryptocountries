import React from 'react';
import Layout from '../../components/Layout';
import MyItems from './MyItems';

const title = '我的国家';

function action() {
  return {
    chunks: ['myitems'],
    title,
    component: (
      <Layout>
        <MyItems title={title} />
      </Layout>
    ),
  };
}

export default action;
