import React from "react";
// import styles from "./topmessage.module.scss";

function TopMessage({ children, className }) {
  return <p className={className}>{children}</p>;
}

export default TopMessage;
