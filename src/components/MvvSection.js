import React from "react";
import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./MvvSection.module.css";

const MvvSection = ({ className = "" }) => {
  return (
    <div className={[styles.mvvSection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.textWrap}>
          <div className={styles.cards}>
            <div className={styles.card}>
            <Tittle text="Missão" mode="claro" />
              <p>
                Prestar serviços de qualidade e ser referência na gestão de
                benefícios, buscando o bem-estar de nossos clientes e seus
                colaboradores.
              </p>
            </div>
            <div className={styles.card}>
                <Tittle text="Visão" mode="claro" />
              <p>
                Tornar-se a gerenciadora de benefícios mais bem conceituada do
                mercado.
              </p>
            </div>
            <div className={styles.card}>
            <Tittle text="Valores" mode="claro" />
              <p>
                Ética, transparência, responsabilidade e respeito ao capital
                humano descrevem a Benefit Serviços.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.mediaWrap}>
          <img src="/mission.jpg" alt="Missão, Visão e Valores" />
        </div>
      </div>
    </div>
  );
};

MvvSection.propTypes = {
  className: PropTypes.string,
};

export default MvvSection;

