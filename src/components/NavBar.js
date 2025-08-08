import React, { useState } from 'react';
import styles from "./NavBar.module.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavBar = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    const offset = 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.NavBar}>
      <div className={`${styles.displayNone} ${isOpen ? styles.displayNone : styles.displayBlock}`} ><MenuRoundedIcon onClick={() => setIsOpen(!isOpen)} fontSize='large' color='primary' /></div>

      <div className={`${styles.displayNone} ${isOpen ? styles.displayBlock : styles.displayNone}`}><CloseRoundedIcon onClick={() => setIsOpen(!isOpen)} fontSize='large' color='primary' /></div>

      <div className={`${styles.navItens} ${isOpen ? styles.openSmMenu : styles.closedSmMenu}`}>
        <img className={styles.logoIcon} alt="" src="/logo.png" onClick={scrollToTop} />
        <div className={styles.navBtn} onClick={() => handleScroll("home")}>Home</div>
        <div className={styles.navBtn} onClick={() => handleScroll("quem-somos")}>Quem Somos</div>        
        <div className={styles.navBtn} onClick={() => handleScroll("produtos-e-servicos")}>Produtos e Serviços</div>
        <div className={styles.navBtn} onClick={() => handleScroll("como-comprar")}>Como Comprar</div>
        <div className={styles.navBtn} onClick={() => handleScroll("fale-conosco")}>Fale Conosco</div>        
        <div className={styles.callBtn} onClick={() => handleScroll("acessar")}>
          Acessar
        </div>
      </div>

    </div>
  );
};

export default NavBar;
