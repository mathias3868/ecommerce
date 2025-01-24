import React from "react";
import Logo from "./Logo";
import SearchNav from "./SearchNav";
import Account from "./Account";
import HelpNav from "./HelpNav";
import CartNav from "./CartNav";
import styles from "./appnavbar.module.scss";

function AppNavBar() {
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

export default AppNavBar;
