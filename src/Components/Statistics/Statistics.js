import React from "react";
import Card from "../Card/Card";
import brandIMG from "./images/icon-brand-recognition.svg";
import recordIMG from "./images/icon-detailed-records.svg";
import customIMG from "./images/icon-fully-customizable.svg";
import styles from "./Statistics.module.css";
function Statistics() {
  return (
    <div className={styles.statistics}>
      <div className={styles.statistics_details}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.statistics_cards}>
        <div>
          <Card
            url={brandIMG}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
          />
        </div>

        <div style={{ marginTop: "60px" }}>
          <Card
            url={recordIMG}
            title="Detailed Records"
            description=" Gain insights into who is clicking your links. Knowing when and where 
        people engage with your content helps inform better decisions."
          />
        </div>
        <div style={{ marginTop: "120px" }}>
          <Card
            url={customIMG}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable 
links, supercharging audience engagement."
          />
        </div>
      </div>
    </div>
  );
}

export default Statistics;
