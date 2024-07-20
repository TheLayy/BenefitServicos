import PropTypes from "prop-types";
import styles from "./HeaderSection.module.css";

const HeaderSection = ({ className = "" }) => {

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

  return (
    <div className={[styles.header, className].join(" ")}>
      <div className={styles.container}>
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
            <div className={styles.callBtn} onClick={() => handleScroll("form")}>
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
