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
          Serviços de seguros completos, adaptados às suas necessidades
        </div>
        <div className={styles.cards}>
          <div className={styles.notReverse}>
            <Card
              insurance="Fit no serviço"
              label1="Fit no"
              label2="serviço"
              color="dark"
              img="services/car-icon.png"
              backText="Trabalhamos seu pedido de forma automatizada, garantindo que o seu procedimento de compra seja ágil, eficiente e descomplicado"
            
            />
            <Card
              insurance="Fit no custo"
              label1="Fit no"
              label2="custo"
              color="light"
              img="services/transportation-icon.png"
              backText="Oferecemos taxas de serviço justas, calculadas com base nos custos operacionais de cada pedido, em forma de uma taxa única"
            />
          </div>
        </div>
        <SlideShow />
        <div className={styles.link} onClick={() => window.open("https://www.benefitservicos.com.br/index3.php", "_blank")}>
          <img className={styles.icon} alt="" src="/blue-arrow-icon.svg" />
          <div className={styles.label}>Conheça nossos outros serviços</div>
        </div>
      </div>
    </div>
  );
};

ServicesSection.propTypes = {
  className: PropTypes.string,
};

export default ServicesSection;
