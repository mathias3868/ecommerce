import React from "react";
import formSideImg from "../../assets/sideImg/Side-Image.png";
import styles from "./formframe.module.scss";
import { Outlet } from "react-router-dom";

function FormFrame() {
  return (
    <div className={styles.fromSectionContainer}>
      <div className={styles.formCol1}>
        <img src={formSideImg} alt="photo" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default FormFrame;
