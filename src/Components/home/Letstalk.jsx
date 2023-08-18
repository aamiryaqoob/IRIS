"use client";
import React from "react";
import { Button } from "antd";
import styles from "./Letstalk.module.css";
import dark from "./Letstalkdark.module.css";
import { useSelector } from "react-redux";

const Letstalk = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.first_sec}>
      <div className={theme ? dark.Letstalk : styles.Letstalk}>
        <h1>
          Meet IRIS, Your Supply Chain Operations <br /> Companion
        </h1>
        <div className={styles.trybtn}>
          <Button className={theme ? dark.Letstalk_btn : styles.Letstalk_btn}>
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Letstalk;
