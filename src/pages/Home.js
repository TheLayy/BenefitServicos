import React from 'react';
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import Layout from "../components/Layout";

const Home = React.memo(() => {
  return (
    <Layout>
      <div style={{ width: "100%", backgroundColor: "var(--colors-white)" }}>
        <HeaderSection />
        <ServicesSection />
        <Section />
      </div>
    </Layout>
  );
});

export default Home;

