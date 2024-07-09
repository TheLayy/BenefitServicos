import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./On.module.css";

const On = ({
  className = "",
  checkIcon,
  showCheckIcon,
}) => {
  return (
    <div className={[styles.on, className].join(" ")}>
      <div className={styles.rectangle} />
      {showCheckIcon && (
        <img className={styles.checkIcon} alt="" src={checkIcon} />
      )}
    </div>
  );
};

On.propTypes = {
  className: PropTypes.string,
  checkIcon: PropTypes.string,
  showCheckIcon: PropTypes.bool,

};

export default On;
