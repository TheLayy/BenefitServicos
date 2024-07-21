import { useState } from "react";
import PropTypes from "prop-types";
import SaibaMais from "./SaibaMais";
import styles from "./Card.module.css";

const Card = ({ className = "", insurance, label1, label2, label3, img, color, backText }) => {
  const [flipped, setFlipped] = useState(false);

  const cardColors = color === "dark" ? styles.darkColors : styles.lightColors;
  const iconSrc = color === "dark" ? "/orange-arrow-icon.svg" : "/blue-orange-arrow-icon.svg";

  const handleClick = () => {
    setFlipped(prevFlipped => !prevFlipped);
  };

  const handleScroll = (id, insurance) => {
    const element = document.getElementById(id);
    const offset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    const url = new URL(window.location);
    url.searchParams.set('insurance', insurance);
    window.history.pushState({}, '', url);
  };

  return (
    <div className={[styles.card, className, cardColors, flipped ? styles.flippedCard : ""].join(" ")}>
      {!flipped ? (
        <div className={styles.cardFront}>
          <div className={styles.headingAndLink} onClick={handleClick}>
            <div className={styles.labelBox}>
              <div className={styles.label1}>{label1}</div>
              <div className={styles.label2}>{label2}</div>
              <div className={label3 ? styles.label3 : styles.displayNone}>{label3}</div>
            </div>
            <SaibaMais
              className={styles.SaibaMais}
              icon={iconSrc}
              label="Saiba Mais"
            />
          </div>
          <img className={styles.cardImg} alt="" src={img} />
        </div>) : (
        <div className={styles.cardBack}>
          <div className={styles.headingAndLink}>
            <div className={styles.backText}>
              {backText}
            </div>
            <div className={styles.bottomDiv}>
              <div className={styles.CoteAgora} onClick={() => handleScroll("form")}>
                <SaibaMais
                  className={styles.SaibaMais}
                  icon={iconSrc}
                  label="Cote Agora"
                />
              </div>
              <img className={styles.backCardImg} alt="" src={img} onClick={() => handleScroll("form", insurance)} />
            </div>
          </div>
        </div>)}

    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  insurance: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
  label3: PropTypes.string,
  backText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["dark", "light"]).isRequired,
};

export default Card;
