"use client";
import React from "react";
import styles from "./Hero.module.css";
import dark from "./HeroDark.module.css";
import { useSelector } from "react-redux";

const HeroResource = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.first_sec}>
      <div className={theme ? dark.Letstalk : styles.Letstalk}>
        <h1>Our Resources</h1>
      </div>
    </section>
  );
};

export default HeroResource;
