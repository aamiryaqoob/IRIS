"use client";
import Blogs from "@/Components/blogs/Blogs";
import HeroBlogs from "@/Components/blogs/Hero";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import React from "react";
import { useSelector } from "react-redux";

const Resource = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <main
      style={{
        backgroundColor: theme ? "#111314" : "#fff",
        overflow: "hidden",
      }}
    >
      <HeroBlogs />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Resource;
