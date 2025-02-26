import React from "react";
import styles from "./modal.module.scss";
import Button from "../Button";

const Modal = ({
  isOpen,
  onClose,
  headTitle,
  headText,
  okText,
  cancelText,
  onOk,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHead}>
          <h5>{headTitle}</h5>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <p>{headText}</p>
        <div className={styles.decisionBtns}>
          <Button className={styles.cancelBtn} onClick={onCancel}>
            {cancelText}
          </Button>
          <Button className={styles.okBtn} onClick={onOk}>
            {okText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

// import React from "react";
// import styles from "./modal.module.scss";
// import Button from "../Button";
// import loveIcon from "../../assets/icons/LoveImage.svg";
// import trashBin from "../../assets/icons/TrashBinSvg.svg";

// function Modal() {
//   return (
//     <div className={styles.modal}>
//       <div className={styles.confirm}>
//         <div className={styles.head}>
//           <p>Remove From Cart</p>
//           <h2>×</h2>
//         </div>
//         <p>Do you really want to remove this item from cart?</p>
//         <div className={styles.buttons}>
//           <Button>
//             <img src={loveIcon} alt="" />
//             <span>save for later</span>
//           </Button>
//           <Button>
//             <img src={trashBin} alt="" />
//             <span>save for later</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
