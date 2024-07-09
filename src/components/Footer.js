import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({
  className = "",
}) => {
  const footerStyle = useMemo(() => {
    return {

    };
  }, [

  ]);

  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footer1}>
        <div className={styles.footer2} />
        <div className={styles.text}>
          ® Benefit Serviços LTDA-ME | Todos os direitos reservados | Designed
          by WWLab
        </div>
      </div>
      <img className={styles.logoFooterIcon} alt="" src="/logofooter@2x.png" />
      <div className={styles.textFooter}>
        <img
          className={styles.mingcutephoneFillIcon}
          alt=""
          src="/mingcutephonefill.svg"
        />
        <b className={styles.b}>(11) 3280-9870</b>
      </div>
      <div className={styles.textFooter1}>
        <img
          className={styles.mingcutephoneFillIcon}
          alt=""
          src="/icbaselineemail.svg"
        />
        <b className={styles.relacionamentobenefitservicos}>
          relacionamento@benefitservicos.com.br
        </b>
      </div>
      <div className={styles.textFooter2}>
        <img
          className={styles.mingcutephoneFillIcon}
          alt=""
          src="/bxsmap.svg"
        />
        <b className={styles.avConceio460}>
          Av Conceição, 460, Centro, Diadema-SP CEP 099200-000
        </b>
      </div>
      <div className={styles.menuFooter}>
        <div className={styles.sobreNs}>Sobre nós</div>
        <div className={styles.produtos}>Produtos</div>
        <div className={styles.contato}>Contato</div>
      </div>
      <div className={styles.link}>
        <div className={styles.iconParent}>
          <img className={styles.icon} alt="" src="/icon.svg" />
          <div className={styles.label}>Conheça nossos outros serviços</div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  footerWidth: PropTypes.any,
  footerHeight: PropTypes.any,
  footerPosition: PropTypes.any,
  footerTop: PropTypes.any,
  footerRight: PropTypes.any,
  footerLeft: PropTypes.any,
};

export default Footer;
