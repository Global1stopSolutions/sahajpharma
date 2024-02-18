import Image from "next/image";
import styles from "@/styles/Home/OurClients.module.css";

const ClientCardItem = ({ imgSrc }) => {
  return (
    <div className={styles.clientcarditem}>
      <Image src={imgSrc} alt="Client" width={120} height={70} />
    </div>
  );
};

const OurClients = () => {
  return (
    <div className={styles.clientcontainer}>
      <div className={styles.clientmaincontainer}>
        <div className={styles.clientleft}>
          <p className={`${styles.clientpreheader} ${styles.lineafter}`}>Featured</p>
          <h1 className={styles.clientheader}>Our Clients</h1>
          <p className={styles.clientsubtitle}>
            Dui vel aliquam nullam nulla natoque iaculis viverra conubia letius. Primis non rhoncus
            dolor a urna finibus ultricies libero.
          </p>
        </div>
        <div className={styles.clientright}>
          <div className={styles.clientcardbtn}></div>
          <div className={styles.clinetcard}>
            <ClientCardItem imgSrc={"/images/c2.png"} />
            <ClientCardItem imgSrc={"/images/c3.png"} />
            <ClientCardItem imgSrc={"/images/c3.png"} />
            <ClientCardItem imgSrc={"/images/c4.png"} />
            <ClientCardItem imgSrc={"/images/c1.png"} />
            <ClientCardItem imgSrc={"/images/c1.png"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
