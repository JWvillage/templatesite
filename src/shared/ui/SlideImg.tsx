import React from "react";
import { transform } from "typescript";

interface Props {
  imgList: any[];
}

const SlideImg: React.FC<Props> = ({ imgList }) => {
  const [count, setCount] = React.useState(0);
  const [customInterVal, setCustomInterVal] = React.useState(3000);

  React.useEffect(() => {
    const c = document.getElementsByTagName("img")[0];
    c.style.display = "flex";
  }, []);

  React.useEffect(() => {
    if (customInterVal !== 10000) {
      let cur_count = count;
      const transTimer = setInterval(() => {
        if (cur_count < imgList.length - 1) {
          setCount((cur_count) => cur_count + 1);
        } else {
          setCount(0);
        }
      }, customInterVal);
      const caroTags = document.getElementsByTagName("img");
      for (var i = 0; i < caroTags.length; i++) {
        caroTags[i].style.display = "none";
      }
      const showImg = document.getElementsByTagName("img")[count];
      showImg.style.display = "flex";
      // console.log(showImg);
      return () => {
        clearInterval(transTimer);
      };
    } else {
      setCount((cur_count) => cur_count);
    }
  }, [count, customInterVal]);

  const btnImg = (el: any) => {
    console.log(el.target.value);
    setCount(el.target.value);
  };

  return (
    <div className="tab_Img">
      {imgList.map((content, i) => {
        const id = "caro" + i;
        return (
          <img
            key={i}
            id={id}
            src={content}
            onMouseOver={() => {
              setCustomInterVal(10000);
            }}
            onMouseOut={() => {
              setCustomInterVal(2000);
            }}
          />
        );
      })}
      <div style={{ position: "fixed", alignSelf: "end", width: "100px" }}>
        {imgList.map((content, i) => {
          const btnId = "btn_" + i;
          return (
            <button key={i} id={btnId} value={i} onClick={btnImg}>
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideImg;
