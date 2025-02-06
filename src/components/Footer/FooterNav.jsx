import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footernav.module.scss";

function FooterNav() {
  return (
    <div className={styles.footerNav}>
      <h4>Account</h4>
      <ul>
        <li>
          <NavLink>My Account</NavLink>
        </li>
        <li>
          <NavLink>Login/Register</NavLink>
        </li>
        <li>
          <NavLink>Cart</NavLink>
        </li>
        <li>
          <NavLink>Whishlist</NavLink>
        </li>
        <li>
          <NavLink>Shop</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FooterNav;
