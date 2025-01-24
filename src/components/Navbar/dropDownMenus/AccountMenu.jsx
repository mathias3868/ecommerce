import React from "react";
import humanIcon from "../../../assets/icons/user.png";
import orderIcon from "../../../assets/icons/Services-5.png";
import whishIcon from "../../../assets/icons/Wishlist.png";
import { NavLink } from "react-router-dom";
import styles from "./accountmenus.module.scss";

export function LoginMenu() {
  return (
    <NavLink to={""} className={styles.loginBtn}>
      Sing In
    </NavLink>
  );
}

export function UserMenu() {
  return (
    <NavLink to={""} className={styles.user}>
      <img src={humanIcon} alt="user Icon" />
      <span>My Account</span>
    </NavLink>
  );
}

export function OrderMenu() {
  return (
    <NavLink to={""} className={styles.order}>
      <img src={orderIcon} alt="order icon" className={styles.ordericon} />
      <span>Orders</span>
    </NavLink>
  );
}

export function WishMenu() {
  return (
    <NavLink to={""} className={styles.wish}>
      <img src={whishIcon} alt="wishes icon" className={styles.wishicon} />
      <span>saved items</span>
    </NavLink>
  );
}
