import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./NavBar.module.css";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.NavBar}>
      <div className={`${styles.displayNone} ${isOpen ? styles.displayNone : styles.displayBlock}`} >
        <MenuRoundedIcon onClick={() => setIsOpen(!isOpen)} fontSize='large' color='primary' />
      </div>

      <div className={`${styles.displayNone} ${isOpen ? styles.displayBlock : styles.displayNone}`}>
        <CloseRoundedIcon onClick={closeMenu} fontSize='large' color='primary' />
      </div>

      <div className={`${styles.navItens} ${isOpen ? styles.openSmMenu : styles.closedSmMenu}`}>
        <Link to="/" className={styles.logoLink} onClick={closeMenu}>
          <img className={styles.logoIcon} alt="Benefit Serviços" src="/logo.png" />
        </Link>
        
        <Link 
          to="/" 
          className={`${styles.navBtn} ${location.pathname === '/' ? styles.active : ''}`}
          onClick={closeMenu}
        >
          Home
        </Link>
        
        <Link 
          to="/quem-somos" 
          className={`${styles.navBtn} ${location.pathname === '/quem-somos' ? styles.active : ''}`}
          onClick={closeMenu}
        >
          Quem Somos
        </Link>
        
        <Link 
          to="/produtos-servicos" 
          className={`${styles.navBtn} ${location.pathname === '/produtos-servicos' ? styles.active : ''}`}
          onClick={closeMenu}
        >
          Produtos e Serviços
        </Link>
        
        <Link 
          to="/como-comprar" 
          className={`${styles.navBtn} ${location.pathname === '/como-comprar' ? styles.active : ''}`}
          onClick={closeMenu}
        >
          Como Comprar
        </Link>
        
        <Link 
          to="/fale-conosco" 
          className={`${styles.navBtn} ${location.pathname === '/fale-conosco' ? styles.active : ''}`}
          onClick={closeMenu}
        >
          Fale Conosco
        </Link>
        
        <div className={styles.callBtn} onClick={closeMenu}>
          Acessar
        </div>
      </div>
    </div>
  );
};

export default NavBar;
