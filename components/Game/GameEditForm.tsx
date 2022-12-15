import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import TimeSlotView, { TimeSlot } from "./TimeSlot";
import TimeSlotPicker from "./TimeSlotPicker";

export type OnGameEdit = (
  img: StaticImageData,
  gameName: string,
  description: string,
  price: number,
  timeSlots: Array<TimeSlot>
) => void;

interface Props {
  img: StaticImageData;
  gameName: string;
  description: string;
  timeSlots: Array<TimeSlot>;
  price: number;
  onEdit: OnGameEdit;
}

export default function GameEditForm({
  img: imgProp,
  gameName: gameNameProp,
  description: descriptionProp,
  timeSlots: timeSlotsProp,
  price: priceProp,
  onEdit,
}: Props) {
  const [img, setImg] = useState(imgProp);
  const [gameName, setGameName] = useState(gameNameProp);
  const [description, setDescription] = useState(descriptionProp);
  const [timeSlots, setTimeSlots] = useState(timeSlotsProp);
  const [price, setPrice] = useState(priceProp);
  const onSubmit = () => {
    onEdit(img, gameName, description, price, timeSlots);
  };

  return (
    <section className="body-font overflow-hidden bg-white text-gray-700">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <div className="relative w-full rounded border border-gray-200 object-cover object-center lg:w-1/2">
            <Image alt="img" src={img} layout="fill" objectFit="cover" />
          </div>
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest text-gray-500">
              ASIA PARK - CÔNG VIÊN CHÂU Á
            </h2>
            <input
              type="text"
              id="name"
              name="name"
              className="title-font mb-1 rounded text-3xl font-medium text-gray-900"
              placeholder="Game name"
              onChange={(e) => {
                setGameName(e.target.value);
              }}
              value={gameName}
            />
            <div className="mb-4 flex">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3 text-gray-600">26 Reviews</span>
              </span>
              <span className="ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <textarea
              id="description"
              name="description"
              className="h-72 w-full leading-relaxed"
              value={description}
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <label className="p-5">Price: </label>
            <input
              type="text"
              id="price"
              name="price"
              className="mb-1 rounded border border-gray-200 text-gray-900"
              placeholder="Price"
              onChange={(e) => {
                setPrice(parseFloat(e.target.value || "0"));
              }}
              value={price}
            />
            <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-200 pb-5"></div>
            <div className="flex flex-row flex-wrap gap-2">
              {timeSlots?.map((timeSlot, timeSlotIndex) => {
                return (
                  <TimeSlotView
                    key={timeSlot.id || timeSlotIndex}
                    id={timeSlot.id}
                    startTime={timeSlot.startTime}
                    endTime={timeSlot.endTime}
                    dialog={
                      <TimeSlotPicker
                        key={timeSlot.id}
                        startTime={timeSlot.startTime}
                        endTime={timeSlot.endTime}
                        onClose={(startTime, endTime) => {
                          setTimeSlots((oldTimeSlots) =>
                            oldTimeSlots.map(
                              (oldTimeSlot, oldTimeSlotIndex) => {
                                if (oldTimeSlotIndex === timeSlotIndex)
                                  return { ...oldTimeSlot, startTime, endTime };
                                else return oldTimeSlot;
                              }
                            )
                          );
                        }}
                      />
                    }
                  />
                );
              })}
              <TimeSlotView
                text="+"
                dialog={
                  <TimeSlotPicker
                    onClose={(startTime, endTime) => {
                      setTimeSlots((oldTimeSlots) => [
                        ...oldTimeSlots,
                        { startTime, endTime },
                      ]);
                    }}
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className="my-5 flex justify-center py-5">
          <button
            className="flex w-28 flex-wrap content-center justify-center rounded border-0 bg-cyan-500 py-1 px-1 text-base text-white hover:bg-cyan-700 focus:outline-none"
            onClick={onSubmit}
          >
            <h4>{"Submit"}</h4>
          </button>
        </div>
      </div>
    </section>
  );
}
