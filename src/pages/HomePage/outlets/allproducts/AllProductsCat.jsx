import React from "react";
import CategoriesList from "./CategoriesList";
import NewProducts from "./NewProducts";
import Products from "./Products";
import styles from "./allproducts.module.scss";
import TopMessage from "../../../../components/TopMessage";

const getdates = new Date();

function AllProductsCat() {
  return (
    <section className={styles.allProductContainer}>
      <div className={styles.allproductCol1}>
        {<CategoriesList />}
        <NewProducts />
      </div>
      <TopMessage className="topmessagebody">
        <p>flash sales</p>
        <p className="time">
          time left: <span>h: {getdates.getUTCHours()}</span>
          <span>
            m:
            {getdates.getUTCMinutes()}
          </span>
          <span>
            s:
            {getdates.getUTCSeconds()}
          </span>
        </p>
      </TopMessage>
      <Products />
    </section>
  );
}

export default AllProductsCat;
