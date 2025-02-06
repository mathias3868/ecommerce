import React from "react";
import styles from "./footerlink.module.scss";

function FooterLinks() {
  return (
    <div className={styles.footerLink}>
      <h4>Short Links</h4>
      <p>Privacy Policy</p>
      <p>Terms of use</p>
      <p>FAQ</p>
      <p>Contact</p>
    </div>
  );
}

export default FooterLinks;
