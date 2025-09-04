import Footer from "../components/Footer";
import Contato from "../components/Contato";
import HistorySection from "../components/HistorySection";
import AboutSection from "../components/AboutSection";
import SocialSection from "../components/SocialSection";
import BenefitsSection from "../components/BenefitsSection";
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import styles from "./Home.module.css";
import SmallFooter from "../components/SmallFooter";
import NavBar from "../components/NavBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fab, Fade, Box } from "@mui/material";
import { useEffect, useState } from "react";

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

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551132809870", "_blank");
  };

  return (
    <div className={styles.home}>
      <NavBar />
      <HeaderSection />
      <ServicesSection />
      <Section />
      <BenefitsSection />
      <SocialSection />
      <AboutSection />
      <HistorySection />
      <Contato />
      <Footer />
      <SmallFooter />

      <ScrollTop>
        <Fab
          size="large"
          aria-label="scroll back to top"
          sx={{ width: 46, height: 46 }}
        >
          <ArrowUpwardIcon sx={{ fontSize: 30 }} />
        </Fab>
      </ScrollTop>

      <button className={styles.floatingButton} onClick={handleWhatsAppClick}>
        <img src="/whatsapp-logo.png" alt="WhatsApp" />
      </button>
    </div>
  );
};

export default Home;
