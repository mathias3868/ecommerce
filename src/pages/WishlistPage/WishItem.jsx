import React from "react";

function WishItem({ favItem }) {
  const { image, title, price } = favItem;
  return (
    <li>
      <div>
        <img src={image} alt={`${title} Photo`} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{price}</p>
      </div>
    </li>
  );
}

export default WishItem;
