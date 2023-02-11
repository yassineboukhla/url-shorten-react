import React from "react";
import styles from "./Link.module.css";
function Link({ oldUrl, shortUrl }) {
  const copyHandler = (event) => {
    navigator.clipboard.writeText(shortUrl);
    event.target.innerText = "Copied!";
    setTimeout(() => {
      event.target.innerText = "Copy";
    }, 5000);
  };
  return (
    <div className={styles.link}>
      <p>{oldUrl}</p>
      <div className={styles.link_wrapper}>
        <a href={shortUrl}>{shortUrl}</a>
        <button onClick={copyHandler}>Copy</button>
      </div>
    </div>
  );
}

export default Link;
