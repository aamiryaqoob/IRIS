"use client";
import React from "react";
import styles from "./Cta.module.css";
import dark from "./CtaDark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const Ssec2 = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.Cta_section}>
      <div className={theme ? dark.container2 : styles.container2}>
        <div className={styles.cta_left}>
          <h1>Data Analytics and Reporting</h1>
          <p>
            Empower your team with intuitive dashboards and customizable reports
            that present critical data in a clear and meaningful way. From
            executive leaders to frontline managers, everyone can access the
            information they need to drive efficiency and collaboration
          </p>
          <div className={styles.cta_btndiv}>
            <Button className={styles.cta_btn}>Learn More</Button>
          </div>
        </div>
        <div className={styles.cta_right}>
          <Image
            className={styles.cta_img}
            src="/images/Rectangle 8.png"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Ssec2;
