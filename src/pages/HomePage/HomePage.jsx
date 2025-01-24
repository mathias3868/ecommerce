import React from "react";
import AppNavBar from "../../components/Navbar/AppNavBar";
import TopMessage from "../../components/TopMessage";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import styles from "./homePage.module.scss";

function HomePage() {
  return (
    <div className={styles.container}>
      <TopMessage className="topmessageNav">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </TopMessage>
      <AppNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomePage;
