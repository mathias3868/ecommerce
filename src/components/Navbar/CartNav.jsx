import React from "react";
import { NavLink } from "react-router-dom";
import cartIcon from "../../assets/icons/Cart1 with buy.png";
import styles from "./cartNav.module.scss";
import { useItem } from "../../contexts/ItemContext";

function CartNav() {
  const { cartedProducts } = useItem();

  const totalQuantity = cartedProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  console.log(totalQuantity); // 3

  return (
    <NavLink to={"/cart"} className={styles.cart}>
      <div>
        <img src={cartIcon} alt="cart icon" />
        <span className={styles.cartName}>Cart</span>
      </div>
      {totalQuantity !== 0 ? (
        <div className={styles.cartTotal}>{totalQuantity}</div>
      ) : (
        ""
      )}
    </NavLink>
  );
}

export default CartNav;
