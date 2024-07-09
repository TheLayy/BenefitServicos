import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./MiddleDarkOutline.module.css";

const MiddleDarkOutline = ({
  className = "",
  placeholder,
}) => {
  return (
    <div
      className={[styles.middleDarkOutline, className].join(" ")}
    >
      <div className={styles.rectangle} />
      <div className={styles.placeholder}>{placeholder}</div>
    </div>
  );
};

MiddleDarkOutline.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default MiddleDarkOutline;
