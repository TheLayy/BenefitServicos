import React from 'react';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';
import HistorySection from '../components/HistorySection';
import SocialSection from '../components/SocialSection';

const QuemSomos = () => {
  return (
    <Layout>
      <AboutSection />
      <HistorySection />
      <SocialSection />
    </Layout>
  );
};

export default QuemSomos;
