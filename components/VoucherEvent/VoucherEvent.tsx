import React, { useState } from "react";
import SliderVoucher from "./SliderVoucher";
import SliderEvent from "./SliderEvent";
export default function VoucherEvent() {
  const [index, setIndex] = useState(0);
  return (
    <div className="bg-gray-900">
      <div className=" border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <ul
          className=" inset-x-4 top-0   -mb-px flex flex-wrap justify-center text-center text-sm font-medium dark:bg-gray-700"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="my-3 mr-4" role="presentation">
            <button
              onClick={() => setIndex(0)}
              className=" inline-block rounded-t-lg border-b-2 border-transparent p-1 font-mono  text-xl font-semibold text-green-400 hover:border-green-400 hover:text-green-400 dark:hover:text-green-400"
            >
              Khuyến Mãi
            </button>
          </li>
          <li className="my-3 ml-4" role="presentation">
            <button
              className=" js-button-event   inline-block rounded-t-lg border-b-2 border-transparent p-1 font-mono  text-xl font-semibold text-green-400 hover:border-green-400 hover:text-green-400 dark:hover:text-green-400"
              onClick={() => setIndex(1)}
            >
              Sự Kiện
            </button>
          </li>
        </ul>
      </div>
      <div className=" top-0 bg-gray-900">
        {index == 0 ? (
          <div className="  js-si-voucher  inset-x-4 top-0">
            <SliderVoucher />
          </div>
        ) : (
          <div className="  js-si-event  inset-x-0 top-0 ">
            <SliderEvent />
          </div>
        )}
      </div>
    </div>
  );
}
