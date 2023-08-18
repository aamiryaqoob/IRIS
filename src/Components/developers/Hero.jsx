"use client";
import React from "react";
import { Button } from "antd";
import styles from "./Letstalk.module.css";
import dark from "./Letstalkdark.module.css";
import { useSelector } from "react-redux";

const HeroDev = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={styles.first_sec}>
      <div className={theme ? dark.Letstalk : styles.Letstalk}>
        <h1>Developers</h1>
        <p>
          Ready to take your application to the next level? Register for API
          access now and start building innovative solutions that leverage the
          power of the IRIS platform. We can&apos;t wait to see what you
          create!
        </p>
        <div className={styles.trybtn}>
          <Button className={theme ? dark.Letstalk_btn : styles.Letstalk_btn}>
            Register
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroDev;
