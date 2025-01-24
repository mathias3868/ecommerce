import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import Discription from "./Discription";
import Footer from "../../components/Footer/Footer";
import TopMessage from "../../components/TopMessage";
import styles from "./productDescription.module.scss";
import Delivery from "./Delivery";

function ProductDiscription() {
  return (
    <div className={styles.mainContainer}>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <div className={styles.descriptionDiv}>
        <Discription />
        <Delivery />
      </div>
      <Footer />
    </div>
  );
}

export default ProductDiscription;
