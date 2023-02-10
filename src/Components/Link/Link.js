import React from "react";
import styles from "./Link.module.css";
function Link({ oldUrl, shortUrl }) {
  return (
    <div className={styles.link}>
      <p>{oldUrl}</p>
      <div className={styles.link_wrapper}>
        <a href={shortUrl}>{shortUrl}</a>
        <button>Copy</button>
      </div>
    </div>
  );
}

export default Link;
