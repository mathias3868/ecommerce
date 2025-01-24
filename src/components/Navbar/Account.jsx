import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import humanIcon from "../../assets/icons/user.png";
import orderIcon from "../../assets/icons/Services-5.png";
import whishIcon from "../../assets/icons/Wishlist.png";
import styles from "./account.module.scss";
import { NavLink, Link } from "react-router-dom";
const items = [
  {
    label: (
      <p to={""} className={styles.loginBtn}>
        Sign In
      </p>
    ),
    key: "0",
  },

  {
    type: "divider",
  },

  {
    label: (
      <NavLink to={""} className={styles.user}>
        <img src={humanIcon} alt="user Icon" />
        <span>My Account</span>
      </NavLink>
    ),
    key: "1",
  },

  {
    label: (
      <NavLink to={""} className={styles.order}>
        <img src={orderIcon} alt="order icon" className={styles.ordericon} />
        <span>Orders</span>
      </NavLink>
    ),
    key: "3",
  },
  {
    label: (
      <Link to={"/wishlist"} className={styles.wish}>
        <img src={whishIcon} alt="wishes icon" className={styles.wishicon} />
        <span>saved items</span>
      </Link>
    ),
    key: "4",
  },
];
function Account() {
  return (
    <div className={styles.dropDown}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()} className={styles.dropItem}>
          <Space>
            <img src={humanIcon} alt="user Icon" />
            <span>Account</span>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default Account;
