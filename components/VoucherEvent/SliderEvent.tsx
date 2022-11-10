import EventItem from "./EventItem";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
function SliderEvent() {
  const myData = EventItem;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };
  return (
    <div className="px-16 pt-12 pb-8 ">
      {myData.map((item) => {
        const { id, image } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? "flex items-center justify-between"
                : "hidden"
            }
          >
            <button
              className="rounded-lg   border-2 border-green-400 text-4xl text-green-400"
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>
            <div className="flex h-72 flex-col items-center">
              <img
                src={image}
                className="h-64 w-full rounded-lg object-cover"
              />
            </div>
            <button
              className="rounded-lg  border-2 border-green-400 text-4xl text-green-400"
              onClick={() => nextSliderHandler(id)}
            >
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default SliderEvent;
