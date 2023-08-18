"use client";
import React from "react";
import styles from "../footer/Footer.module.css";
import dark from "./FooterDark.module.css";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import Link from "next/link";

const Footer = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <footer style={{ backgroundColor: theme ? "#111314" : "#fff" }}>
      <div className={theme ? dark.footer : styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerLink}>
            <h3>Solutions</h3>
            <div>
              <Link href={"/"}>
                <p>Operations Health Monitoring</p>{" "}
              </Link>
              <Link href={"/blogs/the-role-of-data-analytics"}>
                <p>Data Analytics and Reporting</p>{" "}
              </Link>
              <Link href={"/strategies"}>
                <p>Labor Optimization</p>{" "}
              </Link>
              <Link href={"/blogs/streamline"}>
                <p>Streamlined Collaboration</p>{" "}
              </Link>
            </div>
          </div>
          <div className={styles.footerLink}>
            <h3>Resources</h3>
            <div>
              <Link href={"/developers"}>
                <p>Developers</p>{" "}
              </Link>
              <Link href={"/blogs"}>
                <p>IRIS Blogs</p>{" "}
              </Link>
            </div>
          </div>
          <div className={styles.footerLink}>
            <h3>Company</h3>
            <div>
              <Link href={"/contact-us"}>
                <p>Contact Us</p>{" "}
              </Link>
            </div>
          </div>
          <div className={styles.footerLink}>
            <h3>Contact</h3>
            <div>
              <p>
                PO Box 23434 <br />
                Frisco, TX <br />
                75033, USA
              </p>
              <a href="mailto:info@Irissolutions.io">
                <p className={styles.contact_info}>info@Irissolutions.io</p>
              </a>
            </div>
          </div>
        </div>
        <Divider style={{ margin: 0, border: "0.5px solid #3433339b" }} />
        <div className={styles.subfooter}>
          <p>Copy @ 2023 Iris </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
