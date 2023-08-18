"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const SSec4 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container2 : styles.container2}>
        <div className={styles.cta_left}>
          <h1>Streamlined Collaboration</h1>
          <p>
            Improve teamwork and transparency with IRIS War Room solution. Share
            data easily to empower your team with the right information,
            enabling them to work together towards a common goal of enhancing
            warehouse efficiency and customer satisfaction.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn more</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 10.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SSec4;
