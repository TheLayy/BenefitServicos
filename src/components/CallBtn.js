import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CallBtn.module.css";

const CallBtn = ({
  className = "",
  label
}) => {
  return (
    <div
      className={[styles.CallBtn, className].join(" ")}
    >
      <div className={styles.text}>{label}</div>
    </div>
  );
};

CallBtn.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default CallBtn;
