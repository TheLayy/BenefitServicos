import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Tittle.module.css";

const Tittle = ({
  className = "",
  text = "",
  mode = ""
}) => {
  const modeClass = useMemo(() => {
    return mode === "claro" ? "claro" : "escuro";
  }, [mode]);

  const borderModeClass = useMemo(() => {
    return mode === "escuro" ? styles.borderEscuro : styles.borderClaro;
  }, [mode]);

  return (
    <div
      className={[styles.tittle, className].join(" ")}
    >
      <div className={[styles.text, modeClass].join(" ")}>{text}</div>
      <div className={[styles.border, borderModeClass].join(" ")} />
    </div>
  );
};

Tittle.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  mode: PropTypes.oneOf(["claro", "escuro"])
};

export default Tittle;
