import React, { useEffect, useState } from "react";
import NavBarSystem from "./navBarSysytem/NavBarSystem";
import NavbarMobile from "./navBarMobile/NavBarMobile";
import styles from "./appnavbar.module.scss";

function AppNavBar() {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 500);
  useEffect(function () {
    const handleResize = () => {
      setIsVisible(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className={styles.navSection}>
      {isVisible ? <NavBarSystem /> : <NavbarMobile />}
    </div>
  );
}

export default AppNavBar;
