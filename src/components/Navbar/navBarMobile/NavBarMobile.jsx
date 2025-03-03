import { useEffect, useState } from "react";
import Logo from "../Logo";
import NavList from "./NavList";
import styles from "./navbarMobile.module.scss";
import CartNav from "../CartNav";

const NavbarMobile = () => {
  // const [isVisible, setIsVisible] = useState(window.innerWidth > 500);
  // useEffect(function () {
  //   const handleResize = () => {
  //     setIsVisible(window.innerWidth < 500);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <div className={styles.navItemSmall}>
      <Logo />
      <CartNav />
      <NavList />
    </div>
  );
};

export default NavbarMobile;
