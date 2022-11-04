import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Site1 } from "../pages";
import MainLinkContent from "./MainLinkContent";

const MainLink = () => {
  const linkMenu = [
    "실무·취업·자기계발",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
  ];

  const imgList = ["img/1.png", "img/2.png", "img/3.png"];
  const [linkContent, setLinkContent] = React.useState("");

  const changeMenu = (el: any) => {
    // console.log(el.target.text);
    setLinkContent(el.target.text);
  };
  const changeDefault = () => {
    setLinkContent("");
  };

  return (
    <div className="ml">
      <div className="ml_left">
        {linkMenu.map((menu, i) => {
          return (
            <Link
              key={i}
              className="link"
              to="/"
              onMouseOver={changeMenu}
              onMouseOut={changeDefault}
            >
              {menu}
            </Link>
          );
        })}
      </div>
      <MainLinkContent linkContent={linkContent} imgList={imgList} />
    </div>
  );
};

export default MainLink;
