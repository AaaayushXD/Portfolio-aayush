import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import React from "../assets/react.png";
import { Carousel } from "react-responsive-carousel";

export const ImageSlider: React.FC = () => {
  return (
    <div className="grid items-center w-full h-full grid-cols-1 ">
      <Carousel
        showThumbs={false}
        infiniteLoop
        centerSlidePercentage={20}
        transitionTime={500}
        interval={2000}
        autoPlay
        stopOnHover
        swipeable
        centerMode
        useKeyboardArrows
        showIndicators={false}
        emulateTouch
        showArrows={false}
        dynamicHeight
        showStatus={false}
      >
        <div className="w-[120px]">
          <img src={Html} alt="html" className="h-[80px] w-[80px]" />
        </div>
        <div className="w-[120px]">
          <img src={Css} alt="html" className="h-[80px]  w-[80px]" />
        </div>
        <div className="w-[120px]">
          <img src={Js} alt="html" className="h-[80px]  w-[80px]" />
        </div>
        <div className="w-[120px]">
          <img src={React} alt="html" className="h-[80px] w-[80px]" />
        </div>
      </Carousel>
    </div>
  );
};
