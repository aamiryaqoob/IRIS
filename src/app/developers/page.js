"use client";;
import HeroDev from "@/Components/developers/Hero";
import Services from "@/Components/developers/Services";
import ServicesSec2 from "@/Components/developers/ServicesSec2";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import HeroResource from "@/Components/resources/Hero";
import Image1Sec from "@/Components/resources/Image1Sec";
import HeroSolution from "@/Components/solution/Hero";
import React from "react";
import { useSelector } from "react-redux";

const Developers = () => {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <main
      style={{
        backgroundColor: theme ? "#111314" : "#fff",
        overflow: "hidden",
      }}
    >
      <HeroDev />
      <Services />
      <ServicesSec2 />
      <Blog />
      <Contact />
    </main>
  );
};

export default Developers;
