import styles from "@/styles/Home/ServiceCard.module.css";

const ServiceCard = () => {
  return (
    <div className={styles.servicecontainer}>
      <div className={`${styles.servicemaincontainer} ${styles.servicemainmove}`}>
        <div className={`${styles.servicecard} ${styles.sidecard}`}>
          <span className={styles.serviceimg}>
            <i className={styles.servicetalent}></i>
          </span>
          <span className={styles.servicetitle}>Talents Agency</span>
          <span className={styles.servicedesc}>
            Facilisi etiam consectetur mi bibendum posue ultricies cubilibdonei
          </span>
        </div>
        <div className={`${styles.servicecard} ${styles.centercard}`}>
          <span className={styles.serviceimg}>
            <i className={styles.serviceportal}></i>
          </span>
          <span className={styles.servicetitle}>Portal Job</span>
          <span className={styles.servicedesc}>
            Facilisi etiam consectetur mi bibendum posue ultricies cubilibdonei
          </span>
        </div>
        <div className={`${styles.servicecard} ${styles.sidecard}`}>
          <span className={styles.serviceimg}>
            <i className={styles.servicecarrer}></i>
          </span>
          <span className={styles.servicetitle}>Carrer Coaching</span>
          <span className={styles.servicedesc}>
            Facilisi etiam consectetur mi bibendum posue ultricies cubilibdonei
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
