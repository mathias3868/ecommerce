import React from "react";
import { useItem } from "../../contexts/ItemContext";
import WishItem from "./WishItem";

function WishItemsList() {
  const { wishedProducts } = useItem();
  console.log(wishedProducts);

  return (
    <div>
      {wishedProducts.map((favItem) => (
        <WishItem favItem={favItem} key={favItem.id} />
      ))}
    </div>
  );
}

export default WishItemsList;
