"use client";
import React from "react";
import styles from "./HeroBlogs.module.css";
import dark from "./HeroBlogsDark.module.css";
import { useSelector } from "react-redux";

const HeroBlogs = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.first_sec}>
      <div className={theme ? dark.Letstalk : styles.Letstalk}>
        <h1>Our Blogs</h1>
      </div>
    </section>
  );
};

export default HeroBlogs;
