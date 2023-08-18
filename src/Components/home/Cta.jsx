"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const Cta = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Enhancing Efficiency and Productivity</h1>
          <p>
            IRIS acts as a reliable assistant to warehouse managers and
            supervisors, providing them with valuable insights, streamlined
            operations, and ultimately increasing the efficiency and
            profitability of the warehouse. IRIS empowers managers to make
            informed decisions and tackle the challenges of modern warehousing
            effectively.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Connect With Us</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/cta2.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
