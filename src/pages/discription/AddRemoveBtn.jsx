import React, { useState } from "react";
import { useItem } from "../../contexts/ItemContext";
import styles from "./addRemove.module.scss";

function AddRemoveBtn({ quantityInCart }) {
  const { addToCart, removeByDecrement, currentProduct } = useItem();

  const handleAddtoCart = () => {
    addToCart(currentProduct);
  };

  const handleDecrementFromCart = () => {
    removeByDecrement(currentProduct);
    quantityInCart - 1;
  };

  return (
    <div className={styles.addRemoveDiv}>
      <button
        onClick={handleDecrementFromCart}
        disabled={quantityInCart === 0}
        className={styles.removeBtn}>
        -
      </button>
      <p className={styles.count}>{quantityInCart}</p>
      <button onClick={handleAddtoCart} className={styles.addBtn}>
        +
      </button>
    </div>
  );
}

export default AddRemoveBtn;
