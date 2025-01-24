import React from "react";
import { useItem } from "../../contexts/ItemContext";
import CratItems from "./CratItems";

function CartItemsList() {
  const { cartedProducts } = useItem();
  console.log(cartedProducts.length);

  return (
    <div>
      {cartedProducts.map((cartproduct) => (
        <CratItems cartproduct={cartproduct} key={cartproduct.id} />
      ))}
    </div>
  );
}

export default CartItemsList;
