"use client";
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import dark from "./NavBarDark.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/redux/slices/theme";
import { Button, Drawer, Dropdown, Menu, Row } from "antd";

const NavBar = () => {
  const theme = useSelector((state) => state.theme.toggle);
  const dispatch = useDispatch();

  const [scrollY, setScrollY] = useState(0);
  const [hamB, sethamb] = useState(false);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const itemss = [
    getItem(
      <Link onClick={() => sethamb(false)} href={"/solution"}>
        <p>Solution</p>{" "}
      </Link>,
      "sub1",
      null
    ),
    getItem("Resource", "sub2", null, [
      getItem(
        <Link onClick={() => sethamb(false)} href="/resources">
          <span>Our Resources</span>
        </Link>,
        "5"
      ),
      getItem(
        <Link onClick={() => sethamb(false)} href="/blogs">
          <span>Our Blogs </span>
        </Link>,
        "6"
      ),
      getItem(
        <Link onClick={() => sethamb(false)} href="/developers">
          <span>Developers</span>
        </Link>,
        "7"
      ),
    ]),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const hamburgerHandler = () => {
    sethamb(!hamB);
  };
  const browseItem = (theme) => {
    // const theme = useSelector((state) => state.theme.toggle);
    return [
      {
        label: (
          <Link href="/resources">
            <span
              style={{
                fontSize: "12px",
                color: theme ? "inherit" : "#F0F0F0",
                textTransform: "capitalize",
              }}
            >
              Our Resources
            </span>
          </Link>
        ),
        key: "20",
      },
      {
        label: (
          <Link href="/blogs">
            <span
              style={{
                fontSize: "12px",
                color: theme ? "inherit" : "#F0F0F0",
                textTransform: "capitalize",
              }}
            >
              Our Blogs
            </span>
          </Link>
        ),
        key: "12",
      },
      {
        label: (
          <Link href="/developers">
            <span
              style={{
                fontSize: "12px",
                color: theme ? "inherit" : "#F0F0F0",
                textTransform: "capitalize",
              }}
            >
              Developers
            </span>
          </Link>
        ),
        key: "1000",
      },
    ];
  };
  return (
    <nav
      className={`${theme ? dark.nav : styles.nav} ${
        scrollY > 60 ? (theme ? dark.scrolled : styles.scrolled) : ""
      }`}
    >
      <Drawer
        placement={"right"}
        closable={true}
        style={{ width: "100%" }}
        onClose={() => sethamb(false)}
        open={hamB}
        key={"right"}
      >
        <Row className={styles.mobileside}>
          <Menu
            style={{
              width: "100%",
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={itemss}
          />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              padding: "1rem 0",
            }}
          >
            <p className={styles.login}>Login</p>
            <Button className={styles.try_btn2}>Try IRIS Now</Button>
          </Row>
        </Row>
      </Drawer>
      <div className={scrollY > 60 ? styles.scontainer : styles.container}>
        <Link href="/" className={styles.logo}>
          {scrollY > 60 ? (
            <Image
              src="/images/logowhite.svg"
              alt="Company Logo"
              width={75}
              height={82}
            />
          ) : (
            <Image
              src="/images/Vector1.svg"
              alt="Company Logo"
              width={75}
              height={82}
            />
          )}
        </Link>

        <div className={styles.navMobile}>
          <div className={styles.light}>
            {theme ? (
              <img
                onClick={() => {
                  dispatch(toggleTheme(false));
                  localStorage.setItem("theme", false);
                }}
                src="/images/sun.svg"
                alt="moon img"
              />
            ) : (
              <img
                onClick={() => {
                  dispatch(toggleTheme(true));
                  localStorage.setItem("theme", true);
                }}
                src={
                  scrollY > 60 ? "/images/moonwhite.svg" : "/images/moon 1.png"
                }
                alt="moon img"
              />
            )}
          </div>
          <div
            onClick={hamburgerHandler}
            className={`${theme ? "hamburgerDark" : "hamburger"} ${
              hamB && "open"
            } flex center`}
            role="button"
            aria-label="Toggle menu"
          >
            <div></div>
          </div>
        </div>

        <div className={styles.navright}>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            href={"/solution"}
          >
            <div className={scrollY > 60 ? styles.links2 : styles.links}>
              Solutions
            </div>
          </Link>

          <div className={scrollY > 60 ? styles.links2 : styles.links}>
            <Dropdown
              trigger={["click"]}
              menu={{
                items: browseItem(theme),
                style: {
                  backgroundColor: theme ? "white" : "#222",
                  color: "white ",
                },
              }}
            >
              <div>
                <span>Resources</span>
                <span>
                  {theme ? (
                    <Image src="/images/down.svg" width={14} height={14} />
                  ) : (
                    <Image
                      src={
                        scrollY > 60
                          ? "/images/down.svg"
                          : "/images/chevron-down (1) 1.png"
                      }
                      width={14}
                      height={14}
                    />
                  )}
                </span>
              </div>
            </Dropdown>
          </div>

          <div className={scrollY > 60 ? styles.links2 : styles.links}>
            Log in
          </div>
          <div className={styles.try_btn}>Try IRIS Now</div>
          <div className={styles.light}>
            {theme ? (
              <img
                onClick={() => {
                  dispatch(toggleTheme(false));
                  localStorage.setItem("theme", false);
                }}
                src="/images/sun.svg"
                alt="moon img"
              />
            ) : (
              <img
                onClick={() => {
                  dispatch(toggleTheme(true));
                  localStorage.setItem("theme", true);
                }}
                src={
                  scrollY > 60 ? "/images/moonwhite.svg" : "/images/moon 1.png"
                }
                alt="moon img"
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
