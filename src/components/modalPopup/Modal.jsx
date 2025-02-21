import React from "react";
import styles from "./modal.module.scss";
import Button from "../Button";
import loveIcon from "../../assets/icons/LoveImage.svg";
import trashBin from "../../assets/icons/TrashBinSvg.svg";

function Modal() {
  return (
    <div className={styles.modal}>
      <div className={styles.confirm}>
        <div className={styles.head}>
          <p>Remove From Cart</p>
          <h2>×</h2>
        </div>
        <p>Do you really want to remove this item from cart?</p>
        <div className={styles.buttons}>
          <Button>
            <img src={loveIcon} alt="" />
            <span>save for later</span>
          </Button>
          <Button>
            <img src={trashBin} alt="" />
            <span>save for later</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
