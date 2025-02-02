import React from "react";
import { useItem } from "../../contexts/ItemContext";
import CratItems from "./CratItems";
import styles from "./cartItemList.module.scss";

function CartItemsList() {
  const { cartedProducts } = useItem();
  console.log(cartedProducts.length);

  return (
    <section>
      {cartedProducts.length === 0 ? (
        <p>search for product and cartegories to add to your cart</p>
      ) : (
        <ul className={styles.list}>
          {cartedProducts.map((cartproduct) => (
            <CratItems cartproduct={cartproduct} key={cartproduct.id} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default CartItemsList;
