"use client";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import HeroSolution from "@/Components/solution/Hero";
import SSec1 from "@/Components/solution/SSec1";
import SSec3 from "@/Components/solution/SSec3";
import SSec4 from "@/Components/solution/SSec4";
import SSec5 from "@/Components/solution/SSec5";
import Ssec2 from "@/Components/solution/Ssec2";
import Ssec6 from "@/Components/solution/Ssec6";
import React from "react";
import { useSelector } from "react-redux";

const Solution = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <main
      style={{
        backgroundColor: theme ? "#111314" : "#fff",
        overflow: "hidden",
      }}
    >
      <HeroSolution />
      <SSec1 />
      <Ssec2 />
      <SSec3 />
      <SSec4 />
      <SSec5 />
      <Ssec6 />
      <Blog />
      <Contact />
    </main>
  );
};

export default Solution;
