import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./BenefitsSection.module.css";
import Benefit from "./Benefit";

const BenefitsSection = ({ className = "" }) => {
  return (
    <div className={[styles.benefitsSection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <Tittle
          text="Por que nos escolher"
        />
        <div className={styles.content}>
          <Benefit
            tittle="Atendimento Personalizado"
            text="Nossa equipe está sempre pronta para entender as necessidades
              individuais de cada cliente para oferecer as melhores soluções de
              seguro."
            icon="/vip-icon.png"
          />

          <Benefit
            tittle="Variedades de Opções"
            text="Oferecemos uma ampla gama de opções de seguros para que você possa
              escolher a que melhor se adapta às suas necessidades."
            icon="/choice-icon.png"
          />

          <Benefit
            tittle="Confiável e Seguro"
            text="Como corretora de seguros confiável, nos orgulhamos da nossa confiabilidade e compromisso com nossos clientes."
            icon="/trust-icon.png"
          />
        </div>
      </div>
    </div>

  );
};

BenefitsSection.propTypes = {
  className: PropTypes.string,
};

export default BenefitsSection;
