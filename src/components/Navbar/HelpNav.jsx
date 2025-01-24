import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import questionIcon from "../../assets/icons/questioncircle.png";
import styles from "./help.module.scss";
import { NavLink } from "react-router-dom";
const items = [
  {
    label: <NavLink to={""}>1st menu item</NavLink>,
    key: "0",
  },

  {
    type: "divider",
  },

  {
    label: <NavLink to={""}>2nd menu item</NavLink>,
    key: "1",
  },

  {
    label: <NavLink to={""}>3rd menu item</NavLink>,
    key: "3",
  },
];
function HelpNav() {
  return (
    <div className={styles.dropDown}>
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()} className={styles.dropItem}>
          <Space>
            <img
              src={questionIcon}
              alt="question Icon"
              className={styles.questionMark}
            />
            <span>Help</span>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}

export default HelpNav;
