import { useMemo } from "react";
import SaibaMais from "./SaibaMais";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", label1, label2, img, color }) => {

  const cardColors = color === "dark" ? styles.darkColors : styles.lightColors;

  const iconSrc = color === "dark" ? "/orange-arrow-icon.svg" : "/blue-orange-arrow-icon.svg";

  return (
    <div className={[styles.card, className, cardColors].join(" ")}>
      <div className={styles.headingAndLink}>
        <div className={styles.labelBox}>
          <div className={styles.label1}>{label1}</div>
          <div className={styles.label2}>{label2}</div>
        </div>
        <SaibaMais
          className={styles.SaibaMais}
          icon={iconSrc}
          label="Saiba Mais"
        />
      </div>
      <img
        className={styles.cardImg}
        alt=""
        src={img}
      />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,

  /** Style props */
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default Card;