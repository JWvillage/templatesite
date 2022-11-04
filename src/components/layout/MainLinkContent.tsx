import React from "react";
import { SlideImg } from "../../shared";

interface Props {
  linkContent: String;
  imgList: any[];
}

const MainLinkContent: React.FC<Props> = ({ linkContent, imgList }) => {
  let content = null;

  switch (linkContent) {
    case "실무·취업·자기계발":
      content = (
        <div className="ml_right">
          <div className="l_content">123</div>
          <SlideImg imgList={imgList} />
        </div>
      );
      break;
    default:
      content = (
        <div className="ml_right">
          <SlideImg imgList={imgList} />
        </div>
      );
      break;
  }

  return <>{content}</>;
};

export default MainLinkContent;
