import React from 'react';
import Contato from "../components/Contato";
import HistorySection from "../components/HistorySection";
import AboutSection from "../components/AboutSection";
import SocialSection from "../components/SocialSection";
import BenefitsSection from "../components/BenefitsSection";
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import styles from "./Home.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, Fade, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function ScrollTop(props) {
  const { children } = props;
  const [trigger, setTrigger] = useState(false);

  const handleScroll = () => {
    setTrigger(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 85, right: 27 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Home = React.memo(() => {
  return (
    <Layout>
      <div className={styles.home}>
        <HeaderSection />
        <ServicesSection />
        <Section />
        <BenefitsSection />
        <SocialSection />
        <AboutSection />
        <HistorySection />
        <Contato />

        <ScrollTop>
          <Fab
            size="large"
            aria-label="scroll back to top"
            sx={{ 
              width: 46, 
              height: 46, 
              backgroundColor: 'white', 
              '&:hover': { 
                backgroundColor: '#f5f5f5' 
              } 
            }}
          >
            <ArrowUpwardIcon sx={{ fontSize: 30, color: 'var(--color)' }} />
          </Fab>
        </ScrollTop>
      </div>
    </Layout>
  );
});

export default Home;
