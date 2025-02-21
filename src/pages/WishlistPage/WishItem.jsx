import React from "react";
import Button from "../../components/Button";
import { useItem } from "../../contexts/ItemContext";
import styles from "./wishItem.module.scss";
import { useNavigate } from "react-router-dom";

function WishItem({ favItem }) {
  const { removeFromWishes, addToCart } = useItem();
  const { image, title, price, id } = favItem;
  const navigate = useNavigate();

  console.log(title);

  const handleRemove = () => {
    const confirmed = window.confirm(
      "are you sure you want to delete item from favorite(s)"
    );
    if (confirmed) removeFromWishes(id);
  };

  const handleAdd = () => {
    addToCart(id);
    navigate("/cart");
  };

  return (
    <li className={styles.itmeList}>
      <div className={styles.itemListCol1}>
        <img src={image} alt={`${title} Photo`} />
        <div>
          <p className={styles.naming}>{title}</p>
          <p className={styles.pricing}>${price}</p>
        </div>
      </div>
      <div className={styles.itemListCol2}>
        <Button className={styles.remove} onClick={handleRemove}>
          Remove
        </Button>
        <Button className={styles.buy} onClick={handleAdd}>
          Buy Now
        </Button>
      </div>
    </li>
  );
}

export default WishItem;
