import React, { useState } from "react";
import styles from "./navlist.module.scss"; // Import SCSS file
import CategoriesListMobile from "../../../pages/HomePage/outlets/allproducts/CategoriesListMobile";

function NavList() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div
        className={`${styles.navListContainer}  ${isOpen ? styles.open : ""}`}>
        <ul className={`${styles.navlinks} ${isOpen ? styles.open : ""}`}>
          <p className={styles.cancelBtn} onClick={() => setIsOpen(!isOpen)}>
            &times;
          </p>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Search Products</a>
          </li>
          <li>
            <a href="/wishlist">WhishList</a>
          </li>
          <li>
            Categories
            <CategoriesListMobile />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavList;
