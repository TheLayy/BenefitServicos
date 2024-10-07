import Footer from "../components/Footer";
import FormSection from "../components/FormSection";
import Contato from "../components/Contato";
import HistorySection from "../components/HistorySection";
import AboutSection from "../components/AboutSection";
import SocialSection from "../components/SocialSection";
import BenefitsSection from "../components/BenefitsSection";
import Section from "../components/Section";
import ServicesSection from "../components/ServicesSection";
import HeaderSection from "../components/HeaderSection";
import styles from "./Desktop.module.css";
import SmallFooter from "../components/SmallFooter";
import NavBar from "../components/NavBar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Button, Fab, Fade, Box } from "@mui/material"; // Importar Fab e Fade
import { useEffect, useState } from "react";

function ScrollTop(props) {
  const { children } = props;
  const [trigger, setTrigger] = useState(false); // Estado para controle do trigger

  const handleScroll = () => {
    setTrigger(window.scrollY > 300); // Define o trigger quando o scroll é maior que 300
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
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

const Desktop = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/551132809870", "_blank");
  };

  return (
    <div className={styles.desktop}>
      <NavBar />
      <HeaderSection />
      <ServicesSection />
      <Section />
      <BenefitsSection />
      <SocialSection />
      <AboutSection />
      <HistorySection />
      <Contato />
      <FormSection />
      <Footer />
      <SmallFooter />

      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top" sx={{ width: 46, height: 46 }}>
          <ArrowUpwardIcon sx={{ fontSize: 30 }} />
        </Fab>
      </ScrollTop>

      <button className={styles.floatingButton} onClick={handleWhatsAppClick}>
        <img src="/whatsapp-logo.png" alt="WhatsApp" />
      </button>
    </div>
  );
};

export default Desktop;
