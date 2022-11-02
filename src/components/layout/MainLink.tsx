import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { Site1 } from "../pages";
import MainLinkContent from "./MainLinkContent";

const MainLink = () => {
  const linkMenu = [
    "I",
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

  const [linkContent, setLinkContent] = React.useState("");

  const changeMenu = (el: any) => {
    console.log(el.target.text);
    setLinkContent(el.target.text)
  };

  return (
    <div className="ml">
      <div className="ml_left">
        {linkMenu.map((menu, i) => {
          return (
            <Link key={i} className="link" to="/" onMouseOver={changeMenu}>
              {menu}
            </Link>
          );
        })}
      </div>
      <MainLinkContent linkContent={linkContent} />
    </div>
  );
};

export default MainLink;
