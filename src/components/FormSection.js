import On from "./On";
import MiddleDarkOutline from "./MiddleDarkOutline";
import PropTypes from "prop-types";
import styles from "./FormSection.module.css";

const FormSection = ({ className = "" }) => {
  return (
    <div className={[styles.formSection, className].join(" ")}>
      <img
        className={styles.formSectionBgIcon}
        alt=""
        src="/formsectionbg@2x.png"
      />
      <div className={styles.formCard}>
        <div className={styles.formCardBg} />
        <div className={styles.form}>
          <div className={styles.submitBtn}>
            <b className={styles.enviar}>Enviar</b>
          </div>
          <div className={styles.checkbox2}>
            <div className={styles.checked}>
              Eu concordo com os Termos de Utilização
            </div>
            <On
              checkIcon="/check-icon.svg"
              showCheckIcon
            />
          </div>
          <div className={styles.checkbox1}>
            <div className={styles.checked}>
              Quero receber contato por WhatsApp
            </div>
            <On
              checkIcon="/check-icon.svg"
              showCheckIcon={false}
            />
          </div>
          <MiddleDarkOutline
            yourEmail="Seguro para cotar"
          />
          <MiddleDarkOutline
            yourEmail="Celular"
          />
          <MiddleDarkOutline
            yourEmail="E-mail"
          />
          <MiddleDarkOutline
            yourEmail="Seu nome"
          />
          <b className={styles.formTitle}>Faça sua cotação</b>
        </div>
      </div>
      <div className={styles.sectionText}>
        <div className={styles.text}>
          Nosso objetivo é proporcionar tranquilidade através de soluções de
          seguro completas e acessíveis.
        </div>
        <b className={styles.title}>
          <p className={styles.encontre}>{`Encontre `}</p>
          <p className={styles.encontre}>o melhor seguro para você</p>
        </b>
      </div>
    </div>
  );
};

FormSection.propTypes = {
  className: PropTypes.string,
};

export default FormSection;
