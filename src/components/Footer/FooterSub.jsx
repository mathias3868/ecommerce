import React, { useEffect, useRef, useState } from "react";
import SentIcon from "../../assets/icons/SentIcon";
import styles from "./footersub.module.scss";

function FooterSub() {
  const myInput = useRef(null);
  const [showIcon, setShowIcon] = useState(true);

  const handleInput = () => {
    setShowIcon(myInput.current.value === "");
  };

  return (
    <div className={styles.footerSub}>
      <h2>SHOPIFY</h2>
      <h4>subcribe</h4>
      <small>Get 10% off your first order</small>
      <div>
        <input
          type="text"
          placeholder="Enter Your Email"
          ref={myInput}
          onInput={handleInput}
        />
        {showIcon && <SentIcon className={styles.sendIcon} />}
      </div>
    </div>
  );
}

export default FooterSub;
