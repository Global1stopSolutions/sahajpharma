import Image from "next/image";
import styles from "@/styles/Home/IndexHero.module.css";
import indexheroimg from "@/public/images/slider-banner.png";

const IndexHero = () => {
  return (
    <div className={styles.herocontainer}>
      <div className={styles.heromaincontainer}>
        <div className={styles.heroleft}>
          <p className={styles.heropreheader}>LETS START YOUR CAREERS HERE!</p>
          <h1 className={styles.heroheader}>
            Looking for a career change? Browse our job listings now!
          </h1>
          <p className={styles.herosubtitle}>
            Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis quisque
            orci pretium donec elit platea porta integer maecenas risus lobortis.
          </p>
          <span className={styles.activemember}>
            <i className={styles.member}></i> 40 K+ Member Active
          </span>
          <span className={styles.herobtn}>Discover More</span>
        </div>
        <div className={styles.heroright}>
          <Image
            src={indexheroimg}
            alt="Sahaj Pharma"
            width={375}
            height={375}
            priority
            loading={"eager"}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexHero;
