import styles from "@/styles/Layout/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headermaincontainer}>
        <span className={styles.headerleft}>
          <span className={styles.headercontact}>
            <span className={styles.contactlocation}>
              <i className={`${styles.ico} ${styles.icolocation}`}></i>Sahaj Pharma (for HR
              Solutions), Vadodara
            </span>
            <span className={styles.contactmail}>
              <i className={`${styles.ico} ${styles.icomail}`}></i>cv@sahajpharma.com
            </span>
            <span className={styles.contactappointment}>
              <i className={`${styles.ico} ${styles.icoappointment}`}></i>Book appointment
            </span>
          </span>
        </span>
        <span className={styles.headerright}>
          <span className={styles.headerconnect}>
            <i className={`${styles.ico} ${styles.icofacebook}`}></i>
            <i className={`${styles.ico} ${styles.icolinkedin}`}></i>
            <i className={`${styles.ico} ${styles.icotwitter}`}></i>
          </span>
          <span className={styles.headerlanguage}>
            <i className={`${styles.ico} ${styles.icolang}`}></i>English
            <i className={`${styles.ico} ${styles.icovector}`}></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
