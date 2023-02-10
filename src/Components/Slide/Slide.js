import React from "react";
import illustration from "./images/illustration-working.svg";
import styles from "./Slide.module.css";
function Slide() {
  return (
    <div className={styles.slide}>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>Get started</button>
      </div>

      <img src={illustration} alt="" />
    </div>
  );
}

export default Slide;
