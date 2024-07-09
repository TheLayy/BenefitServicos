import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Property1Green.module.css";

const Property1Green = ({
  className = "",
  label,
  label1,
  showLabel,
}) => {
  return (
    <div
      className={[styles.property1green, className].join(" ")}
    >
      <div className={styles.label}>
        <div className={styles.label1}>{label}</div>
      </div>
      <div className={styles.label}>
        <div className={styles.label1}>{label1}</div>
      </div>
      {showLabel && (
        <div className={styles.label}>
          <div className={styles.label1}>Label</div>
        </div>
      )}
    </div>
  );
};

Property1Green.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  showLabel: PropTypes.bool,

};

export default Property1Green;
