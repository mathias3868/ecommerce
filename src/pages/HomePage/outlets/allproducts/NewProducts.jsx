import React from "react";
import { Carousel } from "antd";
import scrollImg1 from "../../../../assets/flames/Frame-1.png";
// import scrollImg1 from "../../assets/flames/Frame-1.png";
import styles from "./newProducts.module.scss";

function NewProducts() {
  return (
    <div className={styles.carouselContainerMain}>
      <Carousel
        autoplay
        autoplaySpeed={6000}
        className={styles.carouselContainer}
        speed={3000}>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
        <div>
          <img src={scrollImg1} alt="" />
        </div>
      </Carousel>
    </div>
  );
}
export default NewProducts;
