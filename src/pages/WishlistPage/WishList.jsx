import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Footer from "../../components/Footer/Footer";
import TopMessage from "../../components/TopMessage";
import WishItemsList from "./WishItemsList";

function WishList() {
  return (
    <div>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <WishItemsList />
      <Footer />
    </div>
  );
}

export default WishList;
