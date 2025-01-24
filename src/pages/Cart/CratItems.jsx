import React from "react";
import AddRemoveBtn from "../discription/AddRemoveBtn";

function CratItems({ cartproduct }) {
  const { image, title, price } = cartproduct;

  return (
    <div>
      <div>
        <div>
          <img src={image} alt={`${title} Photo`} />
        </div>
        <div>
          <h4>{title}</h4>
          <AddRemoveBtn />
        </div>
      </div>
    </div>
  );
}

export default CratItems;
