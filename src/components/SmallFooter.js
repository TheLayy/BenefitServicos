import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SmallFooter.module.css";

const SmallFooter = ({
  className = "",
}) => {
  return (
    <div className={[styles.smallFooter, className].join(" ")}>
      <div className={[styles.container, className].join("container")}>
        <div className={styles.text}>
          ® Benefit Serviços LTDA-ME | Todos os direitos reservados | Designed
          by <a href="https://github.com/leticiamn" target="blank">Letícia Medeiros</a>
        </div>
      </div>
    </div>
  );
};

SmallFooter.propTypes = {
  className: PropTypes.string,
};

export default SmallFooter;
