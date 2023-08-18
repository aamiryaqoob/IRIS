"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const SSec5 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Elevating Maintenance Management</h1>
          <p>
            Gone are the days of reactive maintenance. Our solution puts you in
            control by providing advanced features that allow you to proactively
            plan, execute, and monitor maintenance tasks. Say goodbye to
            firefighting and embrace a strategic approach that ensures your
            equipment operates at its best.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 11.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default SSec5;
