import VoucherItem from "./VoucherItem";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";
function SliderVoucher() {
  const myData = VoucherItem;
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
  const dots = (id) => {
    setActiveSlide(id);
  };
  return (
    <div className="px-16 pt-12 pb-8">
      {myData.map((item) => {
        const { id, image } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? "flex items-center  justify-between"
                : "hidden"
            }
          >
            <button
              className="overflow-hidden rounded-lg border-2 border-green-400 text-4xl text-green-400"
              onClick={() => prevSliderHandler(id)}
            >
              <FiChevronLeft />
            </button>
            <div className="flex h-72 w-full flex-col items-center">
              <div className="relative h-64 w-2/3 rounded-lg object-cover">
                <Image src={image} layout="fill" objectFit="contain" />
              </div>
            </div>
            <button
              className="rounded-lg border-2 border-green-400 text-4xl text-green-400"
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
export default SliderVoucher;
