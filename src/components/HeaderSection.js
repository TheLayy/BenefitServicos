import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css";

const HeaderSection = ({ className = "" }) => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
          <img className={styles.headerImg} alt="" src="/header-woman.png" />
        <div className={styles.texts}>
          <div className={styles.heroText}>Mais que gestão de benefícios,</div>
          <div className={styles.heroText2}>cuidamos de cada pedido e entregamos soluções inteligentes para fazer seu negócio crescer.</div>
          <div className={styles.heroText3}>Benefit Serviços</div>
          <div className={styles.heroText4}>SUA SATISTAÇÃO É NOSSO MAIOR BENEFÍCIO!</div>
          <button className={styles.callBtn} onClick={() => handleScroll("acessar")}>
            Conheça Nossos Serviços
          </button>
        </div>

      </div>
    </div>
  );
};


HeaderSection.propTypes = {
  className: PropTypes.string,
};

export default HeaderSection;
