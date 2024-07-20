import On from "./On";
import MiddleDarkOutline from "./MiddleDarkOutline";
import PropTypes from "prop-types";
import styles from "./FormSection.module.css";

const FormSection = ({ className = "" }) => {
  return (
    <div id="form" className={[styles.formSection, className].join(" ")}>
      <div className={[styles.formContainer, "container"].join(" ")}>
        <div className={styles.textBox}>
          <div className={styles.title}>
            <div>Encontre</div>
            <div>o melhor seguro para você</div>
          </div>
          <p className={styles.text}>
            Nosso objetivo é proporcionar tranquilidade através de soluções de
            seguro completas e acessíveis.
          </p>
        </div>
        <div className={styles.formBox}>
          <div className={styles.formTitle}>Faça sua cotação</div>
        </div>
      </div>
    </div>
  );
};

FormSection.propTypes = {
  className: PropTypes.string,
};

export default FormSection;
