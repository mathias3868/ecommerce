import React from "react";
import styles from "./product.module.scss";
import { useItem } from "../../../../contexts/ItemContext";
import { useNavigate, useParams } from "react-router-dom";

function Product({ product }) {
  const { getProduct } = useItem();
  // const { id } = useParams();
  const navigate = useNavigate();
  const { image, price, title, category, id } = product;

  function handleGettingProd() {
    getProduct(id);
    navigate(`/products/${category}/${id}`);
  }

  return (
    <div className={styles.productBox} onClick={handleGettingProd}>
      <img src={image} alt={`${title} photo`} className={styles.productImg} />
      {/* <button>Add to Chart</button> */}
      <h4 className={styles.productName}>{title}</h4>
      <p className={styles.productPrice}>${price}</p>
    </div>
  );
}

export default Product;
