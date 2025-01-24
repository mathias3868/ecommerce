import React from "react";
import { useItem } from "../../../../contexts/ItemContext";
// import Loading from "../../../../components/Loading";
import { useNavigate } from "react-router-dom";
import styles from "./categoryProduct.module.scss";

function CategoryProducts({ products }) {
  const { getProduct } = useItem();
  const navigate = useNavigate();
  const { title, image, price, category, id } = products;

  function handleGettingProd() {
    getProduct(id);
    navigate(`/products/${category}/${id}`);
  }

  return (
    <div className={styles.productBox} onClick={handleGettingProd}>
      <img className={styles.productImg} src={image} alt={`${title} photo`} />
      <h4 className={styles.productName}>{title}</h4>
      <p className={styles.productPrice}>${price}</p>
    </div>
  );
}

export default CategoryProducts;
