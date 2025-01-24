import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useItem } from "../../../../contexts/ItemContext";
import Category from "./Category";
import styles from "./category.module.scss";

function CategoriesList() {
  const { categories, getCategoryProduct } = useItem();

  return (
    <nav className={styles.categoryNavBar}>
      <ul className={styles.categoryNavList}>
        {categories.map((category) => (
          <Category category={category} key={category} />
        ))}
      </ul>
    </nav>
  );
}

export default CategoriesList;
