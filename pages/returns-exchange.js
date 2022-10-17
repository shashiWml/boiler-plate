import React from 'react';
import Layout from '../components/layout/Layout';
import ReturnsandExchange from '../components/support/Returns/ReturnsandExchange';
import SupportUsLinks from '../components/support/SupportUsLinks';

export default function ReturnsPage() {
  return (
    <Layout>
      <SupportUsLinks />
      <ReturnsandExchange />
    </Layout>
  );
}
