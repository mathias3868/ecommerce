import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import CartItemsList from "./CartItemsList";
import Footer from "../../components/Footer/Footer";
import TopMessage from "../../components/TopMessage";
import styles from "./cart.module.scss";
import TotalInCart from "./totalInCart";

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <div className={styles.cartDivision}>
        <CartItemsList />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
