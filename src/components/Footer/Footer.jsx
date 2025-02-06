import React from "react";
import FooterSub from "./FooterSub";
import FooterSupport from "./FooterSupport";
import FooterNav from "./FooterNav";
import FooterLinks from "./FooterLinks";
import FooterGetApp from "./FooterGetApp";
import styles from "./footer.module.scss";

function Footer() {
  const theYear = new Date();

  return (
    <div className={styles.mainMain}>
      <div className={styles.footerMainContainer}>
        <FooterSub />
        <FooterSupport />
        <FooterNav />
        <FooterLinks />
        <FooterGetApp />
      </div>
      {/* <hr /> */}
      <p className={styles.copywriteMessage}>
        &copy; copywright Shopify {theYear.getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
