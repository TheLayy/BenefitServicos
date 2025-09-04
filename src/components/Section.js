import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./Section.module.css";


const Section = ({ className = "" }) => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const offset = 0;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <div className={[styles.section2, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <img className={styles.sectionSepIconBegin} src="/section-sep-icon-begin.svg" alt="" />
        <Tittle
          text="Gestão de Benefícios Simplificada"
          mode="claro"
        />
        <div className={styles.sectionSubtitle}>
        Oferecemos uma gestão completa e inteligente dos seus benefícios, garantindo praticidade para sua empresa e mais satisfação para seus colaboradores.
        </div>
        <div className={styles.callBtn} onClick={() => handleScroll("form")}>
        Otimize sua gestão hoje mesmo
        </div>
        <img className={styles.sectionSepIconEnd} src="/section-sep-icon-end.svg" alt="" />
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
