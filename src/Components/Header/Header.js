import React, { useRef, useState } from "react";
import styles from "./Header.module.css";
import logo from "./images/logo.svg";
import { HiOutlineMenu, HiX } from "react-icons/hi";
function Header() {
  const [closer, setCloser] = useState(false);
  const headerMobileRef = useRef();
  const menuOpenHandler = (e) => {
    headerMobileRef.current.classList.add(styles.visible);
    setCloser(true);
  };
  const menuCloseHandler = (e) => {
    headerMobileRef.current.classList.remove(styles.visible);
    setCloser(false);
  };
  return (
    <div className={styles.header}>
      <div className={styles.header_wrap}>
        <img src={logo} alt="" />
        <ul className={styles.header_list} ref={headerMobileRef}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <div className={styles.header_auth_mobile}>
            <button className={styles.btn_login}>Login</button>
            <button className={styles.btn_signup}>Sign Up</button>
          </div>
        </ul>
      </div>
      <div className={styles.header_auth}>
        <button className={styles.btn_login}>Login</button>
        <button className={styles.btn_signup}>Sign Up</button>
      </div>
      {closer === false && (
        <HiOutlineMenu
          className={styles.header_menu_icon}
          onClick={menuOpenHandler}
        />
      )}
      {closer === true && (
        <HiX className={styles.header_menu_close} onClick={menuCloseHandler} />
      )}
    </div>
  );
}

export default Header;
