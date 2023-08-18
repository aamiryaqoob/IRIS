"use client";
import React from "react";
import styles from "./ServicesSec2.module.css";
import dark from "./ServicesSec2Dark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const ServicesSec2 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.cta_left}>
          <h1>Welcome to Our Developers API Section!</h1>
          <p>
            Our API is designed to empower developers like you to integrate our
            platform&apos;s functionalities seamlessly into your applications,
            unlocking a world of possibilities and enhancing the user experience
            for your customers.
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>View APIs</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 13.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSec2;
