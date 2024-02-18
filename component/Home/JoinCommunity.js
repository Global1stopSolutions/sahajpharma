import styles from "@/styles/Home/JoinCommunity.module.css";

const JoinCommunity = () => {
  return (
    <div className={styles.joincomcontainer}>
      <div className={styles.joincommaincontainer}>
        <div className={styles.joincomleft}>
          <h1 className={styles.joincomheader}>
            Join our community of talented professionals by applying for a job today!
          </h1>
          <p className={styles.joincomsubtitle}>
            Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis quisque
            orci pretium donec elit platea porta integer maecenas risus lobortis.
          </p>
          <span className="btnwhite">Discover More</span>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
