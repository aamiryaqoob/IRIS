"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const SSec3 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Labor Planning and Optimization</h1>
          <p>
            Say goodbye to manual labor planning and resource allocation
            headaches. Our intelligent platform automatically generates
            optimized labor schedules that align with your peak demand periods,
            ensuring you have the right people in the right place at the right
            time. Take the first step towards optimizing your labor force and
            transforming your warehouse into a model of excellence.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 9.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SSec3;
