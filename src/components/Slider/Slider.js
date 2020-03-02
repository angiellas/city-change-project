import React, { useEffect, useState } from "react";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from "react-icons/io";
import ItemsCarousel from "react-items-carousel";
import SliderCard from "../SliderCard/SliderCard";
import "./Slider.css";

function Slider({ cities, criterion }) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [numberOfCards, setNumberOfCards] = useState(3);

  function onResize() {
    if (window.innerWidth < 576) {
      setNumberOfCards(1);
    } else if (window.innerWidth < 768) {
      setNumberOfCards(2);
    } else {
      setNumberOfCards(3);
    }
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div style={{ padding: `40px 100px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={numberOfCards}
        gutter={20}
        leftChevron={
          <a href="#carouselExampleControls" role="button" data-slide="prev">
            <IoIosArrowDropleftCircle color="grey" size="50px" />
          </a>
        }
        rightChevron={
          <a href="#carouselExampleIndicators" role="button" data-slide="next">
            <IoIosArrowDroprightCircle color="grey" size="50px" />
          </a>
        }
        outsideChevron
        chevronWidth={100}
      >
        {cities.map(city => (
          <div key={city}>
            <SliderCard city={city} criterion={criterion} />
          </div>
        ))}
      </ItemsCarousel>
    </div>
  );
}
export default Slider;
