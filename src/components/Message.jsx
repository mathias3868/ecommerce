import React from "react";
import styles from "./message.module.scss";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Message({ image, messagePara, messageHead, messagebtn }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section>
      <div className={styles.meaasgeBody}>
        <img className={styles.messageImage} src={image} alt="" />
        <h4>{messageHead}</h4>
        <p className={styles.messageTextp}>{messagePara}</p>
        <Button onClick={handleClick} className={styles.messageBtn}>
          {messagebtn}
        </Button>
      </div>
    </section>
  );
}

export default Message;
