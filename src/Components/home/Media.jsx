"use client";
import React from "react";
import styles from "./Media.module.css";
import dark from "./MediaDark.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { BigPlayButton, Player } from "video-react";

const Media = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={theme ? dark.media_section : styles.media_section}>
      <div className={styles.container}>
        <div className={styles.img_div}>
          <Player height={"20rem"} poster="/images/mediaimg.png" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
    </section>
  );
};

export default Media;
