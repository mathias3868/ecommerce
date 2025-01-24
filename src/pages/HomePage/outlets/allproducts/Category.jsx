import React from "react";
import { Link } from "react-router-dom";
import { useItem } from "../../../../contexts/ItemContext";
import styles from "./category.module.scss";

function Category({ category }) {
  const { getCategoryProduct } = useItem();

  const handleClick = () => {
    getCategoryProduct(category);
  };

  return (
    <li className={styles.categoryNavItem}>
      <Link to={`/all_products/${category}`} onClick={handleClick}>
        {" "}
        {category}{" "}
      </Link>
    </li>
  );
}

export default Category;
