import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./Section.module.css";


const Section = ({ className = "" }) => {
  return (
    <div className={[styles.section2, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <img className={styles.sectionSepIconBegin} src="/section-sep-icon-begin.svg" alt="" />
        <Tittle
          text="Assistência Personalizada"
          mode="claro"
        />
        <div className={styles.sectionSubtitle}>
          Nossa equipe dedicada de especialistas está aqui para ajudar você em
          cada etapa. Fornecemos assistência personalizada para garantir que você
          obtenha a melhor cobertura pelo melhor preço.
        </div>
        <div className={styles.callBtn} onClick={() => handleScroll("form")}>
          Faça sua cotação
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
