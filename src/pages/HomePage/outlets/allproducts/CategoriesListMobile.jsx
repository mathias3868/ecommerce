import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useItem } from "../../../../contexts/ItemContext";
import Category from "./Category";
import styles from "./categorieslistmobile.module.scss";

function CategoriesListMobile() {
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
    <ul className={styles.categoriesMobile}>
      {categories.map((category) => (
        <Category category={category} key={category} />
      ))}
    </ul>
  );
}

export default CategoriesListMobile;
