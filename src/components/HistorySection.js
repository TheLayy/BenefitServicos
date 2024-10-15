import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./HistorySection.module.css";

const HistorySection = ({ className = "" }) => {
  return (
    <div className={[styles.historySection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.historyText}>
          <div className={styles.text}>
            <Tittle
              text="Como surgiu?"
              mode="claro"
              className={styles.Tittle}
            />
            <p>
              Em 2010 surgiu a ideia de se desenvolver um sistema de atendimento
              que suprisse a demanda do mercado de benefícios.
            </p>
            <p>
              Em 2011 os sócios se reuniram para concretizar o projeto.
              Resolveram somar suas experiências nas áreas de TI, Logística e
              Comercial para trazer ao mercado nacional um conceito de serviços
              que otimizem e facilitem a gestão de benefícios para as empresas.
            </p>
          </div>
        </div>
        <div className={styles.img}>
          <img className={styles.historyImgIcon} alt="" src="/history-img.png" />
        </div>
      </div>
    </div>
  );
};

HistorySection.propTypes = {
  className: PropTypes.string,
};

export default HistorySection;
