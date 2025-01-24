import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import CartItemsList from "./CartItemsList";
import Footer from "../../components/Footer/Footer";

function Cart() {
  return (
    <div>
      <AppNavBar />
      <CartItemsList />
      <Footer />
    </div>
  );
}

export default Cart;
