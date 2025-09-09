import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SaibaMais.module.css";
import { Link } from "react-router-dom";

const SaibaMais = ({
  className = "",
  icon,
  label,
}) => {
  return (
    <Link to="/produtos-servicos" className={[styles.SaibaMais, className].join(" ")}>
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.label}>{label}</div>
    </Link>
  );
};

SaibaMais.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
};

export default SaibaMais;
