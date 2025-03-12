import React, { useState } from "react";
import AddRemoveBtn from "../discription/AddRemoveBtn";
import styles from "./cartItem.module.scss";
import TrashBinSvg from "../../assets/icons/TrashBinSvg";
import { useItem } from "../../contexts/ItemContext";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/modalPopup/Modal";
// import { Modal } from "antd";

function CartItems({ cartproduct }) {
  const { image, title, price, id, category } = cartproduct;
  const { removeFromCart, addToWishes, cartedProducts, getProduct } = useItem();
  const [open, setOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Remove Item from Cart");
  const [modalText, setModalText] = useState(
    "Do you really want to remove this item from cart?"
  );
  const navigate = useNavigate();

  function handleModalOpen(e) {
    e.stopPropagation();
    setOpen(true);
  }
  function handleModalClose() {
    addToWishes(id);
    setOpen(false);
  }

  const closeModal = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  const productInCart = cartedProducts.find((item) => item.id === id);

  const quantityInCart = productInCart ? productInCart.quantity : 0;

  function handleGettingProd() {
    getProduct(id);
    navigate(`/products/${category}/${id}`);
  }

  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={open}
        headTitle={modalTitle}
        headText={modalText}
        okText="Remove item"
        cancelText="Save for later"
        onOk={handleRemove}
        onCancel={handleModalClose}
        onClose={closeModal}
      />

      <li className={styles.listItem} onClick={handleGettingProd}>
        <div className={styles.listItemCol}>
          <img src={image} alt={`${title} Photo`} />
          <div className={styles.listItemCol1}>
            <h4>{title}</h4>
            <p className={styles.pricing}>${price}</p>
          </div>
        </div>
        <div className={styles.listItemCol2}>
          <div className={styles.removeBtn} onClick={handleModalOpen}>
            <TrashBinSvg />
            <p> Remove</p>
          </div>
          <AddRemoveBtn quantityInCart={quantityInCart} />
        </div>
      </li>
    </div>
  );
}

export default CartItems;
