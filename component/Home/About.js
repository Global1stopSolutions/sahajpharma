import Image from "next/image";
import styles from "@/styles/Home/About.module.css";
import indexheroimg from "@/public/images/about.png";

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutmaincontainer}>
        <div className={styles.aboutleft}>
          <Image
            src={indexheroimg}
            alt="Sahaj Pharma"
            width={400}
            height={280}
            priority
            loading={"eager"}
          />
          <div className={styles.aboutlabel}>
            <i className={styles.aboutnumber}>10+</i>{" "}
            <span className={styles.aboutlabeltext}>year of experience</span>
          </div>
        </div>
        <div className={styles.aboutright}>
          <p className={`${styles.aboutpreheader} ${styles.lineafter}`}>About</p>
          <h1 className={styles.aboutheader}>Bridge for industrial and corporate development.</h1>
          <p className={styles.aboutsubtitle}>
            Established with the aim of helping organizations improve their performance by providing
            right resource at the right time. We Sahaj Pharma believe in becoming one of the trusted
            business partners by delivering quality services. Sahaj Pharma is a premier talent
            search & business outsourcing firm. We aim at fulfilling the demands of the future. With
            expertise in the area of talent search, recruitment & training, we provide qualityacross
            Pharmaceutical and Chemical industries.
          </p>
          <span className="btngreen">Discover More</span>
        </div>
      </div>
    </div>
  );
};

export default About;
