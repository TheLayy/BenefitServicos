import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Benefit.module.css";

const Benefit = ({
  className = "",
  tittle = "",
  text = "",
  icon = ""
}) => {
  return (
    <div
      className={[styles.Benefit, className].join(" ")}
    >
      <img src={icon} alt="" />
      <div className={styles.tittle}>{tittle}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

Benefit.propTypes = {
  className: PropTypes.string,
  tittle: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string
};

export default Benefit;
