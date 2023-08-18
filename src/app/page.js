"use client";

import Aboutus from "@/Components/home/Aboutus";
import styles from "./page.module.css";
import Letstalk from "@/Components/home/Letstalk";
import Media from "@/Components/home/Media";
import Cta from "@/Components/home/Cta";
import Blog from "@/Components/home/Blog";
import Contact from "@/Components/home/Contact";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.toggle);
  return (
    <main style={{ backgroundColor: theme ? "#111314" : "#fff", overflow:"hidden" }}>
      <Letstalk />
      <Media />
      <Aboutus />
      <Cta />
      <Blog />
      <Contact />
      
    </main>
  );
}
