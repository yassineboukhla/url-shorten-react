import React from "react";
import styles from "./Shortener.module.css";
function Shortener() {
  return (
    <div className={styles.shortener}>
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten it!</button>
    </div>
  );
}

export default Shortener;
