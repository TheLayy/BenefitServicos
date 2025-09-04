import PropTypes from "prop-types";
import SaibaMais from "./SaibaMais";
import styles from "./Card.module.css";

const Card = ({ className = "", label1, color, backText }) => {
  const cardColors = color === "dark" ? styles.darkColors : styles.lightColors;
  const iconSrc = color === "dark" ? "/orange-arrow-icon.svg" : "/blue-orange-arrow-icon.svg";


  return (
    <div className={[styles.card, className, cardColors].join(" ")}>
      <div className={styles.headingAndLink}>
        <div className={styles.labelBox}>
          <div className={styles.label1}>{label1}</div>
        </div>

        <div className={styles.backText}>
          {backText}
        </div>

        <div className={styles.bottomDiv}>
          <div className={styles.CoteAgora}>
            <SaibaMais
              className={styles.SaibaMais}
              icon={iconSrc}
              label="Saiba Mais"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  label1: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default Card;
