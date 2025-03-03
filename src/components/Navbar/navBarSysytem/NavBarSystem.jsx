import React, { useEffect, useState } from "react";
import Logo from "../Logo";
import SearchNav from "../SearchNav";
import Account from "../Account";
import HelpNav from "../HelpNav";
import CartNav from "../CartNav";
import styles from "../appnavbar.module.scss";

function NavBarSystem() {
  // const [isVisible, setIsVisible] = useState(window.innerWidth > 500);
  // useEffect(function () {
  //   const handleResize = () => {
  //     setIsVisible(window.innerWidth > 500);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div className={styles.appNavItem}>
      <Logo />
      <SearchNav />
      <Account />
      <HelpNav />
      <CartNav />
    </div>
  );
}

export default NavBarSystem;
