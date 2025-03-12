import React, { useEffect } from "react";
import { useItem } from "../../../../contexts/ItemContext";
import CategoryProducts from "./CategoryProduct";
import styles from "./categoriesProducts.module.scss";
import { NavLink, useParams } from "react-router-dom";
import TopMessage from "../../../../components/TopMessage";
import Loading from "../../../../components/Loading";
// import { useLocation, useParams } from "react-router-dom";

function CategoriesProducts() {
  const { categoryproducts, isLoading } = useItem();
  const { category } = useParams();
  if (isLoading) return <Loading />;
  return (
    <div className={styles.main}>
      <NavLink to={"/"}>Home &gt;&gt; </NavLink>
      <NavLink to={`/all_products/${category}`}>{category}</NavLink>
      <TopMessage className={styles.ActiveCategory}>{category}</TopMessage>
      <TopMessage className={styles.callOrder}>
        Call to Order 09133134466
      </TopMessage>
      <TopMessage className="topmessagebody">
        Call to Order 09133134466
      </TopMessage>

      <div className={styles.productsBlock}>
        {categoryproducts.map((products) => (
          <CategoryProducts products={products} key={products.id} />
        ))}
      </div>
    </div>
  );
}

export default CategoriesProducts;
