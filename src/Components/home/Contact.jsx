"use client";
import React from "react";
import styles from "./Contact.module.css";
import dark from "./ContactDark.module.css";
import { Input, Button } from "antd";
import { useSelector } from "react-redux";

const Contact = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <section className={theme ? dark.Contact_section : styles.Contact_section}>
      <div className={theme ? dark.container : styles.container}>
        <h1>Get In Touch</h1>
        <p>Embrace the future of operations</p>
        <div className={styles.inner_div}>
          <p>Your name</p>
          <Input></Input>
          <p>Company name</p>
          <Input></Input>
          <p>Work email</p>
          <Input></Input>
          <p>How can we help?</p>
          <Input.TextArea rows={5}></Input.TextArea>
          <Button className={styles.submit_btn}>Submit for free estimate</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
