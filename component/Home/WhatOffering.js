import styles from "@/styles/Home/WhatOffering.module.css";

const WhatOfferCardItem = () => {
  return (
    <div className={styles.whatofferingcarditem}>
      <span className={styles.jobcardpretitle}>Fox Hub Studios</span>
      <span className={styles.jobcardtitle}>Process Enginner</span>
      <span className={styles.jobcarddesc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec...
        <a className={styles.jobcardlink}>view job description</a>
      </span>
      <span className={styles.jobcardcategory}>Full time</span>
      <div className={styles.whatofferingapplynow}>
        <span className={`btngreen ${styles.applynowbtn}`}>Apply Now</span>
      </div>
    </div>
  );
};

const WhatOffering = () => {
  return (
    <div className={styles.whatofferingcontainer}>
      <div className={styles.whatofferingmaincontainer}>
        <div className={styles.whatofferingTitle}>
          <p className={`${styles.whatofferingpreheader} ${styles.lineafter}`}>
            what we're offering
          </p>
          <h1 className={styles.whatofferingheader}>
            We're giving all the latest job opening to you
          </h1>
        </div>
        <div className={styles.whatofferingCardContainer}>
          <div className={styles.whatofferingcardbtn}></div>
          <div className={styles.whatofferingcard}>
            <WhatOfferCardItem />
            <WhatOfferCardItem />
            <WhatOfferCardItem />
            <WhatOfferCardItem />
            <WhatOfferCardItem />
            <WhatOfferCardItem />
          </div>
        </div>
        <div className={styles.whatofferingViewAll}>
          <span className={`btngreen ${styles.allopeningbtn}`}>View All Opening</span>
        </div>
      </div>
    </div>
  );
};

export default WhatOffering;
