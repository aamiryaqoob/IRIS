"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Blog.module.css";
import dark from "./BlogDark.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { getPosts } from "@/service";
import Slider from "react-slick";
import Link from "next/link";

const Blog = () => {
  const theme = useSelector((state) => state.theme.toggle);
  const [blogs, setblogs] = useState([]);
  const [nav2, setNav2] = useState();
  const slider1 = useRef();
  const slider2 = useRef(null);
  useEffect(() => {
    setNav2(slider1);
  }, []);
  useEffect(() => {
    const getData = async () => {
      const data = await getPosts();
      setblogs(data?.blogs);
    };
    getData();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className={theme ? dark.Blog_section : styles.Blog_section}>
      <div className={theme ? dark.container : styles.container}>
        <h1 className={theme ? dark.title : styles.title}>Our Blogs</h1>
        <div className={styles.main}>
          <div className={styles.main2}>
            <p>
              All the latest in the Supply Chain space.
              <a href="">View All Blogs</a>
            </p>
          </div>
          <div>
            <span className={styles.circle1}></span>
            <span className={styles.circle1}></span>
          </div>
        </div>

        <div className={styles.card_div}>
          {blogs.length > 0 &&
            blogs.map((val) => (
              <Link key={val.slug} href={`/blogs/${val?.slug}`}>
                <div key={val} className={theme ? dark.card3 : styles.card3}>
                  <div className={styles.arrow3}>
                    <Image src="/images/arrow.png" width={15} height={15} alt="new" />
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

export default Blog;
