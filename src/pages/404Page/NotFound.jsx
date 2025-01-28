import React from "react";
import notFoundImage from "../../assets/404.png";
import styles from "./notFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <img className={styles.notFoundImg} src={notFoundImage} alt="404 photo" />
    </div>
  );
}

export default NotFound;
