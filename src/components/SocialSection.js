import PropTypes from "prop-types";
import styles from "./SocialSection.module.css";

const SocialSection = ({ className = "" }) => {
  return (
    <div className={[styles.socialSection, className].join(" ")}>
      <div className={[styles.container, "container"].join(" ")}>
        <div className={styles.sectionTitle}>Nos siga nas redes</div>
        <div className={styles.socialIcons}>
          <div className={styles.faSlack}></div>
          <div className={styles.faFacebookSquare}></div>
          <div className={styles.faPinterestP}></div>
          <div className={styles.faFacebookSquare1}></div>
          <div className={styles.faBehance}></div>
          <div className={styles.faDribbble}></div>
        </div>
      </div>
    </div>
  );
};

SocialSection.propTypes = {
  className: PropTypes.string,
};

export default SocialSection;
