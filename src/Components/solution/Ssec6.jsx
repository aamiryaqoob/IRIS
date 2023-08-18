"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const Ssec6 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container2 : styles.container2}>
        <div className={styles.cta_left}>
          <h1>Visibility on the go</h1>
          <p>
            Operational disruptions can be costly and detrimental. Our mobile
            solutions empower you to stay one step ahead of potential issues.
            Whether it's operational bottlenecks or demand fluctuations, you'll
            be able to address them proactively. Insights into every step of
            your operation, anytime, anywhere.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 12.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Ssec6;
