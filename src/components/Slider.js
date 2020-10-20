import React, { useState } from "react";
import { NewsCard, LArrow, RArrow , Dots} from "./SliderStyle";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import WDL from "../assets/news/WDL.jpg";
import Sale from "../assets/news/Sale.jpg";


export default function Slider() {
  const [currentShow, setCurrentShow] = useState(0);
  const slider = [
    [WDL, "1 wow much slidey"],
    [Sale, "2 Oh welp here we go"],
  ];

  const changeValue = (val, func) => {
    if (func === "+") {
      if (slider.length > currentShow + 1) setCurrentShow(currentShow + 1);
      else setCurrentShow(0);
    } else if (func === "-") {
      if (currentShow - 1 >= 0) setCurrentShow(currentShow - 1);
      else setCurrentShow(slider.length - 1);
    }
  };
  return (
    <div>
      <NewsCard>
        <LArrow>
            <FaAngleLeft size={32} onClick={(e) => changeValue(1, "+")} />
        </LArrow>
        <RArrow>
            <FaAngleRight size={32} onClick={(e) => changeValue(1, "-")} />
        </RArrow>
        <img src={slider[currentShow][0]} alt="" />
        <span>{slider[currentShow][1]}</span>
        <Dots>
        {
            slider.map((el, index)=> <div className={index === currentShow ? 'square active' : 'square'}></div>)
        }
        </Dots>
        
      </NewsCard>
    </div>
  );
}
