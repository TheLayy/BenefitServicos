import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./AboutSection.module.css";

const AboutSection = ({ className = "" }) => {
  return (
    <div id="sobre-nos" className={[styles.aboutSection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.logo}>
          <img className={styles.logoIcon} alt="" src="/logo.png" />
        </div>
        <div className={styles.aboutText}>
          <div className={styles.text}>
            <Tittle
              text="Sobre nós"
              mode="claro"
            />
            <p>
              Somos a Benefit: Nosso objetivo é auxiliar sua empresa na
              implantação do gerenciamento de benefícios, trazer soluções para os
              seus desafios atuais e garantir o bom andamento de suas
              solicitações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

AboutSection.propTypes = {
  className: PropTypes.string,
};

export default AboutSection;
