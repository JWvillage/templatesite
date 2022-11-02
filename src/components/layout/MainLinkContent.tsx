import React from "react";

interface Props {
  linkContent: String;
}

const MainLinkContent: React.FC<Props> = ({ linkContent }) => {
  let content = null;
  switch (linkContent) {
    case "I":
      content = <div className="ml_right">I</div>;
      break;
    default:
      content = <div className="ml_right">null</div>;
  }

  return <>{content}</>;
};

export default MainLinkContent;
