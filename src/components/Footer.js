import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
}) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={[styles.container, className].join("container")}>
        <div className={styles.content}>
          <div className={styles.info}>
            <img className={styles.logoFooter} alt="" src="/logo-full.png" />
            <div className={styles.infoBlock}>
              <img src="/phone-icon.svg" alt="" />
              <a href="tel:1132809870">(11)3280-9870</a>
            </div>
            <div className={styles.infoBlock}>
              <img src="/email-icon.svg" alt="" />
              <a href="mailto:relacionamento@benefitservicos.com.br">relacionamento@benefitservicos.com.br</a>
            </div>
            <div className={styles.infoBlock}>
              <img src="/map-icon.svg" alt="" />
              <a href="https://maps.app.goo.gl/QUQvnzxZYrnvymne6" target="_blank">Av Conceição, 460, Centro, Diadema-SP CEP 099200-000</a>
            </div>
          </div>

        </div>

        <div className={styles.link} onClick={() => window.open("https://www.benefitservicos.com.br/index3.php", "_blank")}>
          <img className={styles.icon} alt="" src="/blue-arrow-icon.svg" />
          <div className={styles.label}>Conheça nossos outros serviços</div>
        </div>

      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
