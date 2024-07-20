import Tittle from "./Tittle";
import PropTypes from "prop-types";
import styles from "./Contato.module.css";

const Contato = ({ className = "" }) => {
  return (
    <div id="contato" className={[styles.contato, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.tittle}>Como prefere falar com a gente?</div>
        <div className={styles.content}>
          <div className={styles.contacts}>
            <div className={styles.logo}>
              <img src="/logo-full.png" alt="" />
            </div>
            <div className={styles.info}>
              <div className={styles.infoBlock}>
                <div>Prefere ligar?</div>
                <div>
                  <img src="/phone-icon.svg" alt="" />
                  <a href="tel:1132809870">(11)3280-9870</a>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <div>É mais chegado em e-mail?</div>
                <div>
                  <img src="/email-icon.svg" alt="" />
                  <a href="mailto:relacionamento@benefitservicos.com.br">relacionamento@benefitservicos.com.br</a>
                </div>
              </div>
              <div className={styles.infoBlock}>
                <div>Venha nos visitar</div>
                <div>
                  <img src="/map-icon.svg" alt="" />
                  <a href="https://maps.app.goo.gl/QUQvnzxZYrnvymne6">Av Conceição, 460, Centro, Diadema-SP CEP 099200-000</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.map}></div>
        </div>
      </div>
    </div>
  );
};

Contato.propTypes = {
  className: PropTypes.string,
};

export default Contato;
