"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const SSec1 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Operations Health Monitoring</h1>
          <p>
            Our cutting-edge platform aggregates and analyzes data from various
            sources, giving you a comprehensive and real-time view of your
            warehouse health. Stay ahead of disruptions, anticipate demand
            fluctuations, and make informed decisions that keep your supply
            chain agile and resilient.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 7.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SSec1;
