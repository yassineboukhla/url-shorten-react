import React from "react";

function Card({ url, title, description }) {
  return (
    <div>
      <img src={url} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
