import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SaibaMais.module.css";

const SaibaMais = ({
  className = "",
  icon,
  label,
}) => {
  return (
    <div
      className={[styles.SaibaMais, className].join(" ")}
    >
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.label}>{label}</div>
    </div>
  );
};

SaibaMais.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default SaibaMais;
