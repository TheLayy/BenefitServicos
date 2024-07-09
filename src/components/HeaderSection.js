import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css";

const HeaderSection = ({ className = "" }) => {
  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <div className={styles.navItens}>
            <img className={styles.logoIcon} alt="" src="/logo.png" />
            <div className={styles.sobreNs}>Sobre nós</div>
            <div className={styles.produtos}>Produtos</div>
            <div className={styles.contato}>Contato</div>
            <div className={styles.callBtn}>
              Faça sua cotação
            </div>
          </div>
        </div>

        <div>
          <div className={styles.heroText}>
            <div className={styles.subTitle}>
              <b className={styles.brokerSeguros}>Broker Seguros</b>
              <div className={styles.subTitleChild} />
            </div>
            <b className={styles.title}>
              <span className={styles.soluesPara}>{`Soluções para `}</span>sua
              segurança
            </b>
            <div className={styles.callBtn}>
              Faça sua cotação
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeaderSection.propTypes = {
  className: PropTypes.string,
};

export default HeaderSection;
