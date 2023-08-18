"use client";
import React from "react";
import styles from "./BlogpostSec2.module.css";
import dark from "./BlogpostSec2Dark.module.css";
import Image from "next/image";
import { Button } from "antd";
import { useSelector } from "react-redux";

const BlogpostSec2 = ({ blogData }) => {
  const theme = useSelector((state) => state.theme.toggle);
  const getContentFragment = (index, text, obj, type) => {
    console.log(obj);
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.type === "link") {
        modifiedText = (
          <a style={{ color: "#dc3645" }} href={obj.href}>
            {obj.children[0].text}
          </a>
        );
      }
    }

    switch (type) {
      case "heading-one":
        return (
          <h1 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h1>
        );
      case "link":
        return <a key={index}>here</a>;
      case "heading-two":
        return (
          <h2 key={index}>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} classNameName="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} classNameName="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} classNameName="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <section className={theme ? dark.Cta_section : styles.Cta_section}>
      {blogData?.mainDescription.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </section>
  );
};

export default BlogpostSec2;
