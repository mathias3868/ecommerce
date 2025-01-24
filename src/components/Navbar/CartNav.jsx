import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icons/Cart1 with buy.png";
import styles from "./cart.module.scss";

function CartNav() {
  return (
    <NavLink to={"/cart"} className={styles.cart}>
      <img src={cartIcon} alt="cart icon" />
      <span>Cart</span>
    </NavLink>
  );
}

export default CartNav;
