import React from "react";
import searchIcon from "../../assets/icons/search-icon.png";
import styles from "../Navbar/search.module.scss";
import Button from "../Button";

function SearchNav() {
  return (
    <div className={styles.search}>
      <div>
        <input
          type="search"
          placeholder="Search Products, Brand and Categories"
        />
        <img src={searchIcon} alt="search icon" className={styles.iconsearch} />
      </div>
      <Button className={styles.searchButton}>Search</Button>
    </div>
  );
}

export default SearchNav;
