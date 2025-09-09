import React from "react";
import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./FilosofiaSection.module.css";

const FilosofiaSection = ({ className = "" }) => {
  return (
    <div className={[styles.filosofiaSection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.mediaWrap}>
          <img src="business-ilustration-2.jpg" alt="Business Ilustration" />
        </div>
        <div className={styles.textWrap}>
          <Tittle text="Filosofia fit" mode="claro" />
          <p>
            Fit no serviço: trabalhamos seu pedido com agilidade - temos um
            processo automatizado para garantir que o seu procedimento de compra
            seja suave e eficiente
          </p>
          <p>
            Fit no preço: nossas taxas são justas - calculamos uma taxa única de
            serviço com base nos custos operacionais de cada pedido. Nada de
            complicação ou de preços abusivos.
          </p>
        </div>
      </div>
    </div>
  );
};

FilosofiaSection.propTypes = {
  className: PropTypes.string,
};

export default FilosofiaSection;

