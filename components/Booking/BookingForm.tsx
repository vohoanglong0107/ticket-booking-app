import React, { useEffect, useState } from "react";
// import Image from "next/image";

// import '../../styles/globals.css'
export default function BookingForm() {
  return (
    <section className="gradient-form bg-gray-200">
      <div className="py-12 px-6">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="xl:w-6/12">
            <div className="block rounded-lg bg-white shadow-lg  md:p-12">
              <div className="text-center">
                <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                  TÀU LƯỢNG SIÊU TỐC
                </h4>
              </div>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Name"
                    name="name"
                    value={"Tàu lượn siêu tốc"}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Price"
                    name="price"
                    value={"50.000"}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Location"
                    name="location"
                    value={""}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    placeholder="Time"
                    name="time"
                    value={"3:0:0 12-12-2022"}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="form-control
                          transitionS
                          m-0
                          block
                          w-full
                          rounded
                          border
                          border-solid
                          border-gray-300 bg-white
                          bg-clip-padding px-3 py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          ease-in-out
                          focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                    id="game-remaining-slot"
                    placeholder="Slot"
                    name="Slot"
                  />
                </div>

                <div className="mb-8 pt-1 pb-1 text-center">
                  <button
                    className="mb-3 inline-block w-full rounded bg-cyan-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    type="submit"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
