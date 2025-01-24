import React from "react";
import { useItem } from "../../../../contexts/ItemContext";
import Product from "./Product";
import Loading from "../../../../components/Loading";
import styles from "./products.module.scss";

function Products() {
  const { products, isLoading } = useItem();

  if (isLoading) return <Loading />;

  return (
    <section className={styles.productsBlock}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  );
}

export default Products;
