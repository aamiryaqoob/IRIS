"use client";
import React, { useEffect, useState } from "react";
import styles from "../home/Blog.module.css";
import dark from "../home/BlogDark.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getPosts } from "@/service";
import Link from "next/link";

const Blogs = () => {
  const theme = useSelector((state) => state.theme.toggle);
  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      setblogs(data?.blogs);
    };
    getData();
  }, []);
  return (
    <section className={theme ? dark.Blog_section : styles.Blog_section}>
      <div className={theme ? dark.container : styles.container}>
        <div className={styles.card_div}>
          {blogs.length > 0 &&
            blogs.map((val) => (
              <Link key={val.slug} href={`blogs/${val?.slug}`}>
                <div key={val} className={theme ? dark.card3 : styles.card3}>
                  <div className={styles.arrow3}>
                    <Image src="/images/arrow.png" width={15} height={15} alt="here" />
                  </div>
                  <img
                    style={{
                      width: "100%",
                      height: "17rem",
                      objectFit: "cover",
                      borderRadius: "10px 10px 0 0",
                    }}
                    src={val.image.url}
                    alt=""
                  />
                  <div className={theme ? dark.content : styles.content}>
                    <h1>{val.name}</h1>
                    <p>{val.cardDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
