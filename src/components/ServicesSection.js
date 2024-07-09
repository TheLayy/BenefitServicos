import Card from "./Card";
import Property1Green from "./Property1Green";
import Property1White from "./SaibaMais";
import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./ServicesSection.module.css";

const ServicesSection = ({ className = "" }) => {
  return (
    <div className={[styles.servicesSection, className].join(" ")}>
      <div className={styles.container}>
        <img
          className={styles.sectionSepIcon}
          alt=""
          src="/orange-section-sep-icon.png"
        />
        <Tittle
          text="Encontre as melhores cotações de seguros"
        />
        <div className={styles.sectionSubtitle}>
          Serviços de seguros completos, adaptados às suas necessidades
        </div>
        <div className={styles.cards}>
          <Card
            className="card"
            label1="Seguros de"
            label2="Veículo"
            showLabel={false}
            color="purple"
            img="/car-icon.png"
          />
          <Card
            className="card"
            label1="Seguro"
            label2="Residência"
            showLabel={false}
            color="purple"
            img="/house-icon.png"
          />
        </div>
      </div>
    </div>
  );
};

ServicesSection.propTypes = {
  className: PropTypes.string,
};

export default ServicesSection;
