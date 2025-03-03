import React, { useState } from "react";
import styles from "./navlist.module.scss"; // Import SCSS file
import CategoriesList from "../../../pages/HomePage/outlets/allproducts/CategoriesList";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            Categories
            <CategoriesList />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavList;
