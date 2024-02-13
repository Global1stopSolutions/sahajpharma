import Link from "next/link";
import Image from "next/image";
import ActiveLink from "@/component/Layout/ActiveLink";
import styles from "@/styles/Layout/Navbar.module.css";
import sahajpharmaLogo from "@/public/images/sahajpharma_logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbarmaincontainer}>
        <span className={styles.navbarleft}>
          <Link href="/">
            <Image
              src={sahajpharmaLogo}
              alt="Sahaj Pharma"
              width={70}
              height={65}
              priority
              loading={"eager"}
            />
          </Link>
        </span>
        <span className={styles.navbarright}>
          <ul className={styles.navlist}>
            <li className={styles.navlistitems}>
              <ActiveLink activeClassName={styles.navactive} href="/">
                <span>Home</span>
              </ActiveLink>
            </li>
            <li className={styles.navlistitems}>
              <ActiveLink activeClassName={styles.navactive} href="/aboutus">
                <span>About Us</span>
              </ActiveLink>
            </li>
            <li className={styles.navlistitems}>
              <ActiveLink activeClassName={styles.navactive} href="/current-opening">
                <span>Current Opening</span>
              </ActiveLink>
            </li>
            <li className={styles.navlistitems}>
              <ActiveLink activeClassName={styles.navactive} href="/blogs">
                <span>Blogs</span>
              </ActiveLink>
            </li>
            <li className={styles.navlistitems}>
              <ActiveLink activeClassName={styles.navactive} href="/contact">
                <span>Contact</span>
              </ActiveLink>
            </li>
            <li className={styles.navlistitems}>
              <span className={styles.search}>
                <i className={styles.icosearch}></i>
              </span>
            </li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
