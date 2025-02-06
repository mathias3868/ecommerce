import React from "react";
import Qrcode from "../../assets/getApp/Qr-Code.png";
import GoogleLogo from "../../assets/getApp/GooglePlay.png";
import AppstoreLogo from "../../assets/getApp/AppStore.png";
import Facebook from "../../assets/socialMedia/Icon-Facebook.png";
import Instagram from "../../assets/socialMedia/icon-instagram.png";
import LinkedIn from "../../assets/socialMedia/Icon-Linkedin.png";
import Twitter from "../../assets/socialMedia/Icon-Twitter.png";
import styles from "./footerget.module.scss";

function FooterGetApp() {
  return (
    <div className={styles.footerGet}>
      <h4>Download App</h4>
      <small>get 20% off with app now New users only</small>
      <div className={styles.getFlex1}>
        <div>
          <img className={styles.QrCode} src={Qrcode} alt="Qrcode photo" />
        </div>
        <div>
          <img
            className={styles.appStore}
            src={GoogleLogo}
            alt="google photo"
          />
          <img
            className={styles.appStore}
            src={AppstoreLogo}
            alt="appstore photo"
          />
        </div>
      </div>
      <div className={styles.getFlex2}>
        <img src={Facebook} alt="Facebook photo" />
        <img src={Instagram} alt="Instagram photo" />
        <img src={LinkedIn} alt="LinkedIn photo" />
        <img src={Twitter} alt="Twitter photo" />
      </div>
    </div>
  );
}

export default FooterGetApp;
