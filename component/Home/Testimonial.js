import styles from "@/styles/Home/Testimonial.module.css";

const Testimonial = () => {
  return (
    <div className={styles.testimonialcontainer}>
      <div className={styles.testimonialmaincontainer}>
        <div className={styles.tesimonialcomleft}>
          <p className={`${styles.testimonialpreheader} ${styles.lineafter}`}>Testimonial</p>
          <h1 className={styles.testimoniaheader}>What they say about us</h1>
          <p className={styles.testimonialtitle}>
            Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus
            dolor a urna finibus ultricies libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
