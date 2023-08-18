"use client";
import React from "react";
import styles from "./Services.module.css";
import dark from "./ServicesDark.module.css";
import { useSelector } from "react-redux";

const Services = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Aboutus_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.about_company}>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={theme ? dark.span : styles.span}>550+</span> <br />{" "}
            Projects
          </p>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={theme ? dark.span : styles.span}>201000+</span>{" "}
            <br /> Worked Hours
          </p>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={theme ? dark.span : styles.span}>13+</span> <br />{" "}
            Years in operation
          </p>
          <p className={theme ? dark.p1 : styles.p1}>
            <span className={theme ? dark.span : styles.span}>27+</span> <br />{" "}
            Industries surved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
