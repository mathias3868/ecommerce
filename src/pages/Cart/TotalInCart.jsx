import React from "react";
import { useItem } from "../../contexts/ItemContext";
import Button from "../../components/Button";
import styles from "./totalincart.module.scss";

function TotalInCart() {
  const { cartedProducts } = useItem();

  const totalPrice = cartedProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // console.log(`total Price ${totalPrice}`);

  const total = Math.round(totalPrice);

  return (
    <div>
      <div className={styles.totalPriceContainer}>
        <p className={styles.totalHead}>CART SUMMARY</p>
        <div className={styles.totalpricecol1}>
          <p>subtotal</p>
          <h5>${total}</h5>
        </div>
        <small>Delivery fee not included yet</small>

        <Button className={styles.checkoutBtn}>Checkout (${total})</Button>
      </div>

      <div className={styles.returningDetailsContainer}>
        <p>Returns are easy</p>
        <small>Free returns within 7 days for ALL eligible items </small>
        <a href="#">Details</a>
      </div>
    </div>
  );
}

export default TotalInCart;
