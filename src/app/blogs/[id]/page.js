"use client";
import BlogpostSec2 from "@/Components/blogpost/BlogpostSec2";
import BlogHero from "@/Components/blogpost/Hero";
import Blogs from "@/Components/blogs/Blogs";
import HeroBlogs from "@/Components/blogs/Hero";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import { getPostDetails } from "@/service";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BlogPost = ({ params, searchParams }) => {
  const theme = useSelector((state) => state.theme.toggle);
  const [blogData, setBlogData] = useState(null);
  const { id } = params;
  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = await getPostDetails(id);
        console.log({ data });
        setBlogData(data);
      }
    };
    getData();
  }, [id]);

  console.log({ id });
  return (
    <main
      style={{
        backgroundColor: theme ? "#111314" : "#fff",
        overflow: "hidden",
      }}
    >
      <BlogHero blogData={blogData} />
     {blogData && <BlogpostSec2 blogData = {blogData} />}
      <Blog />
      <Contact />
    </main>
  );
};

export default BlogPost;
