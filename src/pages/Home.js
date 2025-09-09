import React from 'react';
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import styles from "./Home.module.css";
import Layout from "../components/Layout";

const Home = React.memo(() => {
  return (
    <Layout>
      <div className={styles.home}>
        <HeaderSection />
        <ServicesSection />
        <Section />
      </div>
    </Layout>
  );
});

export default Home;

