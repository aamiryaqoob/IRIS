"use client";

import React from "react";
import styles from "./Image1Sec.module.css";
import dark from "./Image1SecDark.module.css";
import { useSelector } from "react-redux";

const Image1Sec = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <div className={!theme ? styles.upperContainer : dark.upperContainer}>
      <div className={!theme ? styles.container : dark.container}>
        <div className={styles.left}>
          <img src="/images/resource1.png" alt="John Deo" />
        </div>
        <div className={!theme ? styles.right : dark.right}>
          <h1>John Deo</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
            editors now use Lorem Ipsum as their default model text, and
            auncover.
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.left}>
          <img src="/images/resource1.png" alt="John Deo" />
        </div>
        <div className={theme ?dark.right :styles.right}>
          <h1>John Deo</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
            editors now use Lorem Ipsum as their default model text, and
            auncover.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/images/resource2.png" alt="John Deo" />
        </div>
        <div className={theme ?dark.right :styles.right}>
          <h1>John Deo</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
            editors now use Lorem Ipsum as their default model text, and
            auncover.
          </p>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.left}>
          <img src="/images/resource3.png" alt="John Deo" />
        </div>
        <div className={theme ?dark.right :styles.right}>
          <h1>John Deo</h1>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page
            editors now use Lorem Ipsum as their default model text, and
            auncover.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Image1Sec;
