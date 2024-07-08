import React from "react";
import { Category, Price, Brand } from "@/constants";
import Image from "next/image";

export default function CategorySection() {
  return (
    <section className="px-6 lg:px-16 py-2 lg:py-8">
      <div>
        <h1 className="text-black font-opensans text-16 lg:text-[30px] font-bold">
          Fashion Category
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="mt-10 w-1/4">
            <div className="mb-10">
              <h1 className="text-black font-opensans font-semibold capitalize">
                Category
              </h1>
              <div className="flex gap-3 flex-wrap w-[250px] mt-5">
                {Category.map((item, index) => (
                  <div
                    key={index}
                    className={`border border-[#D9D9D9] p-2 rounded-lg font-opensans font-normal text-[15px] ${
                      index === 0 || index === 1 || index === 7
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                  >
                    {item.category}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-black font-opensans font-semibold capitalize">
                Price Range
              </h1>
              <div className="flex gap-3 flex-wrap w-[100px] mt-5">
                {Price.map((item, index) => (
                  <div
                    key={index}
                    className={`border border-[#D9D9D9] p-2 rounded-lg font-opensans font-normal text-[15px] ${
                      index === 2 ? "text-blue-500" : ""
                    }`}
                  >
                    {item.price}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h1 className="text-black font-opensans font-semibold capitalize">
                Brand
              </h1>
              <div className="flex gap-3 flex-wrap w-[200px] mt-5">
                {Brand.map((item, index) => (
                  <div
                    key={index}
                    className={`border border-[#D9D9D9] p-2 rounded-lg font-opensans font-normal text-[15px] ${
                      index === 1 || index === 7 ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {item.category}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h1 className="text-black font-opensans font-semibold capitalize">
                Ratings
              </h1>
              <div>
                <Image src="/svg/rating.svg" alt="ratings" width={100} height={20} className="mt-4" />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1>item data</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
