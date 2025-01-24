import React from "react";
import logo from "../../assets/logo/logoedit.png";
import { Link } from "react-router-dom";
import styles from "./logo.module.scss";
export default function Logo() {
  return (
    <Link className={styles.logo} to={"/"}>
      <img src={logo} alt="Logo Image" />
      <h1>SHOPIFY</h1>
    </Link>
  );
}
