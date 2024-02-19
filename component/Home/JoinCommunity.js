import styles from "@/styles/Home/JoinCommunity.module.css";

const JoinCommunity = () => {
  return (
    <>
      <div className={styles.joincomcontainer}>
        <div className={styles.joincommaincontainer}>
          <div className={styles.joincomleft}>
            <h1 className={styles.joincomheader}>
              Join our community of talented professionals by applying for a job today!
            </h1>
            <p className={styles.joincomsubtitle}>
              Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis
              quisque orci pretium donec elit platea porta integer maecenas risus lobortis.
            </p>
            <span className="btnwhite">Discover More</span>
          </div>
        </div>
      </div>
      <div className={styles.communitydetail}>
        <div className={styles.communitydtlcard}>
          <span className={styles.communitydtlnum}>540+</span>
          <span className={styles.communitydtltext}>Member active</span>
        </div>
        <div className={styles.communitydtlcard}>
          <span className={styles.communitydtlnum}>40+</span>
          <span className={styles.communitydtltext}>Companies</span>
        </div>
        <div className={styles.communitydtlcard}>
          <span className={styles.communitydtlnum}>240+</span>
          <span className={styles.communitydtltext}>Expert Trainers</span>
        </div>
        <div className={styles.communitydtlcard}>
          <span className={`${styles.communitydtlnum} noborder`}>10+</span>
          <span className={`${styles.communitydtltext} noborder`}>Years of experience</span>
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
