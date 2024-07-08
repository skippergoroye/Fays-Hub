import React from "react";
import Image from "next/image";
import { Search, Heart, ShoppingCart } from "lucide-react"; 
import { Category } from "@/constants";

export default function Navbar() {
  return (
    <section className="px-8 lg:px-16 py-8">
      <div className="flex items-center">
        <div className="flex flex-1">
          <Image
            src="/svg/fays-hub.svg"
            alt="fay-hub"
            width={100}
            height={50}
          />
        </div>

        <div className="flex mr-10 gap-20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for styles here"
              className=" border border-black focus:outline-none focus-visible:ring-0 rounded-lg p-2 pr-8"
            />
            <Search className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 w-4" />
          </div>
          <div>
            <ul className="flex gap-8">
              
              {Category.map((item, index) => (
                <li className="capitalize font-opensans font-light text-black text-[20px]">
                  {item.category}
                </li>
              ))}
    
            </ul>
          </div>
          <div className="mt-2 flex gap-6">
            <Heart size="20" />
            <ShoppingCart size="20" /> 
            <Image src="/svg/header-icon.svg" alt="header-icon" width={40} height={20} className="-mt-3" />
            
          </div>
        </div>
      </div>
    </section>
  );
}






