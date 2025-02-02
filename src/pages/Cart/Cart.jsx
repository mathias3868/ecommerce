import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import CartItemsList from "./CartItemsList";
import Footer from "../../components/Footer/Footer";
import TopMessage from "../../components/TopMessage";

function Cart() {
  return (
    <div>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <CartItemsList />
      <Footer />
    </div>
  );
}

export default Cart;
