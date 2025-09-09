import Card from "./Card";
import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./ServicesSection.module.css";
import SlideShow from "./SlideShow";

const ServicesSection = ({ className = "" }) => {
  return (
    <div id="produtos" className={[styles.servicesSection, className].join(" ")}>
      <div className={styles.container}>
        <img
          className={styles.sectionSepIcon}
          alt=""
          src="/orange-section-sep-icon.png"
        />
        <Tittle
          text="Soluções e Negócios"
        />
        <div className={styles.sectionSubtitle}>
          Serviços completos, adaptados às suas necessidades
        </div>
        
        <SlideShow />

        <div className={styles.cards}>
          <div className={styles.notReverse}>
            <Card
              label1="Fit no Serviço"
              color="dark"
              img="services/car-icon.png"
              backText="Trabalhamos seu pedido de forma automatizada, garantindo que o seu procedimento de compra seja ágil, eficiente e descomplicado"
            
            />
            <Card
              label1="Fit no Custo"
              color="light"
              img="services/transportation-icon.png"
              backText="Oferecemos taxas de serviço justas, calculadas com base nos custos operacionais de cada pedido, em forma de uma taxa única"
            />
          </div>
        </div>

        <div className={styles.link} onClick={() => window.open("https://benefitbroker.com.br/", "_blank")}>
          <img className={styles.icon} alt="" src="/blue-arrow-icon.svg" />
          <div className={styles.label}>Conheça nossos serviços</div>
        </div>
      </div>
    </div>
  );
};

ServicesSection.propTypes = {
  className: PropTypes.string,
};

export default ServicesSection;
