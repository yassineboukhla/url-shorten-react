import React, { useEffect, useState } from "react";
import Link from "../Link/Link";
import styles from "./Shortener.module.css";
function Shortener() {
  const [api, setApi] = useState("https://api.shrtco.de/v2/shorten?url=");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const inputHandler = (event) => {
    setLink(event.target.value);
  };
  const shortenLink = () => {
    fetch(`${api}${link}`)
      .then((res) => res.json())
      .then((data) =>
        setLinks([
          ...links,
          {
            oldUrl: link,
            shortUrl: data.result.full_short_link,
          },
        ])
      );
  };
  return (
    <div>
      <div className={styles.shortener}>
        <input
          type="url"
          placeholder="Shorten a link here..."
          onChange={inputHandler}
        />
        <button onClick={shortenLink}>Shorten it!</button>
      </div>
      {links.length > 0 &&
        links.map((url) => (
          <Link
            oldUrl={url.oldUrl}
            key={url.shortUrl}
            shortUrl={url.shortUrl}
          />
        ))}
    </div>
  );
}

export default Shortener;
