import React from "react";
import Button from "../../components/Button";
import styles from "./checkoutbtn.module.scss";

function CheckOutCartBtn({ total }) {
  return <Button className={styles.checkoutBtn}>Checkout (${total})</Button>;
}

export default CheckOutCartBtn;
