import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Footer from "../../components/Footer/Footer";
import WishItemsList from "./WishItemsList";

function WishList() {
  return (
    <div>
      <AppNavBar />
      <WishItemsList />
      <Footer />
    </div>
  );
}

export default WishList;
