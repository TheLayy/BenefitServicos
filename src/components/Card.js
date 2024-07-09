import { useMemo } from "react";
import SaibaMais from "./SaibaMais";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ className = "", showLabel, label1, label2, img, color }) => {
  const cardStyle = useMemo(() => {
    return {
      color: color === "purple" ? "purple" : "orange",
    };
  }, [color]);

  const iconSrc = color === "purple" ? "/icon1.svg" : "/icon2.svg";

  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.headingAndLink} style={cardStyle}>
        <div className={styles.labelBox}>
          <div className={styles.label1}>{label1}</div>
          <div className={styles.label2}>{label2}</div>
        </div>
        <SaibaMais
          icon={iconSrc}
          label="Saiba Mais"
        />
      </div>
      <img
        alt=""
        src={img}
      />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  showLabel: PropTypes.bool,

  /** Style props */
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["purple", "orange"]).isRequired,
};

export default Card;