import React from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.svg";
function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <img src={logo} alt="" />
        <ul className={styles.header_list}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className={styles.header_auth}>
        <button className={styles.btn_login}>Login</button>
        <button className={styles.btn_signup}>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
