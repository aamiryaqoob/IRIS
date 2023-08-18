"use client";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import HeroResource from "@/Components/resources/Hero";
import Image1Sec from "@/Components/resources/Image1Sec";
import HeroSolution from "@/Components/solution/Hero";
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
      <HeroResource />
      <Image1Sec />
      <Blog />
      <Contact />
    </main>
  );
};

export default Resource;
