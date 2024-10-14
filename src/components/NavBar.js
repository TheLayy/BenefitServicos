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
      <MenuRoundedIcon onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? styles.displayNone : styles.displayBlock}`} fontSize='large' color='primary' />

      <CloseRoundedIcon onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? styles.displayBlock : styles.displayNone}`} fontSize='large' color='primary' />

      <div className={`${styles.navItens} ${isOpen ? styles.openSmMenu : styles.closedSmMenu}`}>
        <img className={styles.logoIcon} alt="" src="/logo.png" onClick={scrollToTop} />
        <div className={styles.sobreNs} onClick={() => handleScroll("sobre-nos")}>Sobre nós</div>
        <div className={styles.produtos} onClick={() => handleScroll("produtos")}>Produtos</div>
        <div className={styles.contato} onClick={() => handleScroll("contato")}>Contato</div>
        <div className={styles.callBtn} onClick={() => handleScroll("form")}>
          Faça sua cotação
        </div>
      </div>

    </div>
  );
};

export default NavBar;
