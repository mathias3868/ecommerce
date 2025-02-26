import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useItem } from "../../../../contexts/ItemContext";
import Category from "./Category";
import styles from "./category.module.scss";

function CategoriesList() {
  const { categories, getCategoryProduct } = useItem();

  const [isVisible, setIsVisible] = useState(window.innerWidth > 500);
  useEffect(function () {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={!isVisible ? styles.none : styles.categoryNavBar}>
      <ul className={styles.categoryNavList}>
        {categories.map((category) => (
          <Category category={category} key={category} />
        ))}
      </ul>
    </nav>
  );
}

export default CategoriesList;
