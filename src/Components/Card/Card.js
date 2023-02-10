import React from "react";
import styles from "./Card.module.css";
function Card({ url, title, description }) {
  return (
    <div className={styles.card}>
      <img src={url} alt="" className={styles.card_img} />
      <h3 className={styles.card_title}>{title}</h3>
      <p className={styles.card_paragraph}>{description}</p>
    </div>
  );
}

export default Card;
