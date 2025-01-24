import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Footer from "../../components/Navbar/AppNavBar";
import WishItemsList from "./WishItemsList";

function WishList() {
  return (
    <div>
      <WishItemsList />
      <Footer />
    </div>
  );
}

export default WishList;
