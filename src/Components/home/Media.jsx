"use client";
import React from "react";
import styles from "./Media.module.css";
import dark from "./MediaDark.module.css";
import { useSelector } from "react-redux";

const Media = () => {
  const theme = useSelector((state) => state.theme.toggle);
  
  return (
    <section className={theme ? dark.media_section : styles.media_section}>
      <div className={styles.container}>
        <div className={styles.img_div}>
          <video
            autoPlay
            loop
            muted  // Adding muted attribute to improve autoplay compatibility
            className={styles.video}
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Media;
