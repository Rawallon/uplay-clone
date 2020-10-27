import React, { useEffect, useState } from "react";
import { NewsCard, LArrow, RArrow , Dots} from "./SliderStyle";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { newsSlider } from '../global/GamesDetails';
import { useTransition, animated } from "react-spring";

export default function Slider() {
  const [currentShow, setCurrentShow] = useState(0);
  const sliderData = newsSlider;


  const changeValue = (val, func) => {
    if (func === "+") {
      if (sliderData.length > currentShow + 1) setCurrentShow(currentShow + 1);
      else setCurrentShow(0);
    } else if (func === "-") {
      if (currentShow - 1 >= 0) setCurrentShow(currentShow - 1);
      else setCurrentShow(sliderData.length - 1);
    }
  };

  const transitions = useTransition(sliderData[currentShow][1], null, {
    from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { position: "absolute",opacity: 1, transform: 'translate3d(-100%,0,0)' },
    });
  return (
    <div>
      <NewsCard>
        <LArrow>
            <FaAngleLeft size={32} onClick={(e) => changeValue(1, "-")} />
        </LArrow>
        <RArrow>
            <FaAngleRight size={32} onClick={(e) => changeValue(1, "+")} />
        </RArrow>
        {
          transitions.map(({ item, props, key }) =>
          <animated.img key={key} style={props} src={item} />
          )
        }
        <span>{sliderData[currentShow][0]}</span>

        <Dots>
        {
            sliderData.map((el, index)=> <div key={index} className={index === currentShow ? 'square active' : 'square'}></div>)
        }
        </Dots>
        
      </NewsCard>
    </div>
  );
}
