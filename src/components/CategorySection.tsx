"use client";

import React from "react";
import { Category, Price, Brand, Arrival, Cloth } from "@/constants";
import Image from "next/image";
import { X } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import { addToCart } from "../redux/features/cart/cartSlice";

export default function CategorySection() {
  const dispatch = useAppDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart(item));
  };

  return (
    <section className="px-6 lg:px-16 py-2 lg:py-8">
      <div>
        <h1 className="text-black font-opensans text-16 lg:text-[30px] font-bold">
          Fashion Category
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="mt-20 w-1/4">
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
                <Image
                  src="/svg/rating.svg"
                  alt="ratings"
                  width={100}
                  height={20}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
          <div className="lg:mt-2 mt-10">
            <div className="flex flex-wrap">
              <div className="flex flex-1 flex-wrap gap-4 w-full lg:w-auto">
                {Arrival.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-2 items-center justify-center border p-2 rounded-lg font-opensans text-[#767676] w-full sm:w-auto"
                  >
                    {item.category}
                    <X color="#374957" />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-4 lg:mt-0 lg:ml-[240px] w-full lg:w-auto">
                <p className="font-opensans text-[#767676]">Sort by</p>
                <div className="flex gap-2 border p-2 rounded-lg font-opensans text-[#767676]">
                  Relevance <X color="#374957" />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {Cloth.map((item) => (
                  <div
                    key={item.id}
                    className="mt-2 flex flex-col gap-3 border border-[#D9D9D9] p-3 rounded-lg"
                  >
                    <Image
                      src={item.imgIcon}
                      alt="card-image"
                      width={200}
                      height={200}
                    />
                    <div className="flex flex-col gap-2">
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                      <Image
                        src={item.ratingIcon}
                        alt="rating-icon"
                        width={100}
                        height={100}
                      />
                      <button
                        className="flex bg-[#536EFD] hover:bg-blue-800 text-white items-center justify-center p-2 rounded-lg w-30 lg:w-40 transition-all duration-500"
                        onClick={() => handleAddToCart(item)}
                      >
                        <Image
                          src={item.cartIcon}
                          alt="card-image"
                          width={20}
                          height={20}
                        />
                        <p>{item.addtocart}</p>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
