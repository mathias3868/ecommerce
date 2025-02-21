import React from "react";
import AddRemoveBtn from "../discription/AddRemoveBtn";
import styles from "./cartItem.module.scss";
import TrashBinSvg from "../../assets/icons/TrashBinSvg";
import { useItem } from "../../contexts/ItemContext";
import { useNavigate } from "react-router-dom";

function CartItems({ cartproduct }) {
  const { image, title, price, id, category } = cartproduct;
  const { removeFromCart, cartedProducts, getProduct } = useItem();
  const navigate = useNavigate();

  function handleRemove() {
    const confirmed = window.confirm(
      "are you sure you want to delet item from cart"
    );
    if (confirmed) removeFromCart(id);
  }

  const productInCart = cartedProducts.find((item) => item.id === id);

  const quantityInCart = productInCart ? productInCart.quantity : 0;

  function handleGettingProd() {
    getProduct(id);
    navigate(`/products/${category}/${id}`);
  }

  return (
    <li className={styles.listItem} onClick={handleGettingProd}>
      <div>
        <div className={styles.listItemCol1}>
          <img src={image} alt={`${title} Photo`} />
          <h4>{title}</h4>
        </div>
        <div className={styles.removeBtn} onClick={handleRemove}>
          <TrashBinSvg />
          <p> Remove</p>
        </div>
      </div>
      <div className={styles.listItemCol2}>
        <p className={styles.pricing}>${price}</p>
        <AddRemoveBtn quantityInCart={quantityInCart} />
      </div>
    </li>
  );
}

export default CartItems;
