import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Footer from "../../components/Footer/Footer";
import TopMessage from "../../components/TopMessage";
import WishItemsList from "./WishItemsList";
import styles from "./wishlist.module.scss";

function WishList() {
  return (
    <div className={styles.wishlistContainer}>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <div className={styles.wishlistSection}>
        <WishItemsList />
      </div>
      <Footer />
    </div>
  );
}

export default WishList;
