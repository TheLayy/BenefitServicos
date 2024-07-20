import styles from "./NavBar.module.css";

const NavBar = ({ }) => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 70;
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
      <div className={styles.navItens}>
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
