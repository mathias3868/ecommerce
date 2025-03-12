import React, { useEffect, useState } from "react";
import { useItem } from "../../contexts/ItemContext";
import { NavLink, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./description.module.scss";
import cartIcon from "../../assets/icons/cartIconWhite2.png";

import StarRate from "../../components/StarRate";
import LoveImage from "../../assets/icons/LoveImage";
import AddRemoveBtn from "./AddRemoveBtn";

function Discription() {
  // const [plusMinus, setPlusMinus] = useState(false);
  // const [clicked, setClicked] = useState(0);
  const {
    currentProduct,
    addToCart,
    cartedProducts,
    getCategoryProduct,
    wishedProducts,
  } = useItem();
  const { category } = useParams();
  const {
    image,
    title,
    description,
    price,
    // rating: { rate },
  } = currentProduct;

  const handleAddtoCart = () => {
    console.log("Adding to cart:", currentProduct); // Log the product being added
    addToCart(currentProduct);
    // setClicked((clicked) => clicked + 1);
  };

  const handleGetCategory = () => {
    getCategoryProduct(category);
  };

  const productInCart = cartedProducts.find(
    (item) => item.id === currentProduct.id
  );

  const quantityInCart = productInCart ? productInCart.quantity : 0;

  console.log(quantityInCart);

  const isFavorite = wishedProducts.some((fav) => fav.id === currentProduct.id);

  return (
    <div>
      <div className={styles.canScrollLink}>
        <NavLink to={"/"}>Home >> </NavLink>
        <NavLink to={`/all_products/${category}`} onClick={handleGetCategory}>
          {category} >>{" "}
        </NavLink>
        <NavLink>{title}</NavLink>
      </div>
      <div className={styles.descriptionBox}>
        <div className={styles.descriptionImage}>
          <img src={image} alt={`${title} Photo`} />
        </div>
        <div className={styles.details}>
          <div className={styles.detailsHead}>
            <div className={styles.tags}>
              <p className={styles.tag1}>OFFICIAL STORE</p>
              <p className={styles.tag2}>Free Delivery</p>
            </div>
            <LoveImage
              className={styles.loveIcon}
              isFavorite={isFavorite}
              currentProduct={currentProduct}
            />
          </div>
          <h3 className={styles.descriptionName}>{title}</h3>
          <p className={styles.descriptionDetails}>{description}</p>
          <h3 className={styles.descriptionPrice}>${price}</h3>
          {/* <StarRate starRate={rate} color="#fcc419" defaultRate={rate} /> */}
          <div className={styles.btnColumn}>
            {quantityInCart < 1 ? (
              <button
                className={styles.detailsAddBtn}
                onClick={handleAddtoCart}>
                <img src={cartIcon} alt="Icon photo" />
                <span>Add to cart</span>
              </button>
            ) : (
              <div className={styles.flexBtn}>
                <AddRemoveBtn quantityInCart={quantityInCart} />
                <p className={styles.count}>
                  ( {quantityInCart} item(s) added )
                </p>
                {/* <h2>{cartedProducts.length}</h2> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discription;
