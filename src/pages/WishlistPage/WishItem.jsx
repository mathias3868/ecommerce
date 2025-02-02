import React from "react";
import Button from "../../components/Button";
import { useItem } from "../../contexts/ItemContext";

function WishItem({ favItem }) {
  const { removeFromWishes } = useItem();
  const { image, title, price, id } = favItem;

  console.log(title);

  const handleRemove = () => {
    removeFromWishes(id);
  };

  return (
    <li>
      <div>
        <img src={image} alt={`${title} Photo`} />
        <Button onClick={handleRemove}>Remove</Button>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </li>
  );
}

export default WishItem;
