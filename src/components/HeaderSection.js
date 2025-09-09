import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css";
import { useNavigate } from "react-router-dom";

const HeaderSection = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
        <img className={styles.headerImg} alt="" src="/header-woman.png" />
        <img className={styles.logoMobile} alt="Benefit Serviços" src="/logo.png" />
        <div className={styles.texts}>
          <div className={styles.heroText}>Mais que gestão de benefícios,</div>
          <div className={styles.heroText2}>cuidamos de cada pedido e entregamos soluções inteligentes para fazer seu negócio crescer.</div>
          <div className={styles.heroText3}>Benefit Serviços</div>
          <div className={styles.heroText4}>SUA SATISTAÇÃO É NOSSO MAIOR BENEFÍCIO!</div>
          <button className={styles.callBtn} onClick={() => navigate('/produtos-servicos')}>
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
