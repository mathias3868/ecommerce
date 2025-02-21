import React from "react";
import { useItem } from "../../contexts/ItemContext";
import CartItems from "./CartItems";
import styles from "./cartItemList.module.scss";
import cartImage from "../../assets/sideImg/transparent-cart-scaled.jpg";
import Message from "../../components/Message";
import TotalInCart from "./totalInCart";
// import Modal from "../../components/modalPopup/Modal";

function CartItemsList() {
  const { cartedProducts, totalPrice } = useItem();
  console.log(cartedProducts.length);

  if (cartedProducts.length === 0)
    return (
      <Message
        image={cartImage}
        messageHead="Your cart is empty!"
        messagePara="Browse our categories and discover our best deals!"
        messagebtn="Start Shopping"
      />
    );

  console.log(totalPrice);

  return (
    <section className={styles.cartDivision}>
      {/* <Modal /> */}
      <ul className={styles.list}>
        <p className={styles.cart}>CART({cartedProducts.length})</p>
        {cartedProducts.map((cartproduct) => (
          <CartItems cartproduct={cartproduct} key={cartproduct.id} />
        ))}
      </ul>
      <TotalInCart />
    </section>
  );
}

export default CartItemsList;
