import React from 'react';
import Layout from '../components/Layout';
import AboutSection from '../components/AboutSection';
import HistorySection from '../components/HistorySection';
import FilosofiaSection from '../components/FilosofiaSection';
import MvvSection from '../components/MvvSection';

const QuemSomos = () => {
  return (
    <Layout>
      <div className="container" style={{ textAlign: 'center', padding: '2rem 0' }}>
        <img
          src="/business-ilustration.jpg"
          alt="Business Illustration"
          style={{ maxWidth: '50vw', height: 'auto' }}
        />
      </div>
      <AboutSection />
      <HistorySection />
      <FilosofiaSection />
      <MvvSection />
    </Layout>
  );
};

export default QuemSomos;
