"use client";
import React from "react";
import styles from "./Aboutus.module.css";
import dark from "./AboutusDark.module.css";
import { useSelector } from "react-redux";

const Aboutus = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Aboutus_section}>
      <div className={theme ? dark.container : styles.container}>
        <h1>About Us</h1>
        <p className={theme ? dark.aboutp : styles.aboutp}>
          We work collaboratively with Supply Chain operations to deliver
          tangible and sustainable results
        </p>
        <div className={styles.about_company}>
          <p className={theme ? dark.p2 : styles.p2}>
            <span className={styles.span}>Founded in 2023</span>
          </p>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={styles.span}>
              20+ Years Of Combined Experience{" "}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
