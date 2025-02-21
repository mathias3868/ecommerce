import React from "react";
import { useItem } from "../../contexts/ItemContext";
import WishItem from "./WishItem";
import Message from "../../components/Message";
import wishImage from "../../assets/sideImg/item-shop-wish-list.webp";
import styles from "./wishlistItems.module.scss";

function WishItemsList() {
  const { wishedProducts } = useItem();
  console.log(wishedProducts);

  if (wishedProducts.length === 0)
    return (
      <Message
        image={wishImage}
        messageHead="You haven't saved an item yet!"
        messagePara="Found something you like? Tap on the heart shaped icon next to the item to add it to your wishlist! All your saved items will appear here."
        messagebtn="Continue Shopping"
      />
    );

  return (
    <ul className={styles.wishList}>
      {wishedProducts.map((favItem) => (
        <WishItem favItem={favItem} key={favItem.id} />
      ))}
    </ul>
  );
}

export default WishItemsList;
