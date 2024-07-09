'use client'

import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation'

export default function PayNow() {
    const router = useRouter()
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div>
        <div className="mb-4">
          <p onClick={() => router.push("/")} className="text-center">Back To Home</p>
        </div>
        <div className="p-4 sm:p-6 w-full sm:w-[600px] h-auto sm:h-[400px] bg-gray-100 border gap-4 sm:gap-10 flex flex-col items-center justify-center rounded-lg shadow-2xl">
          <Image
            src="/svg/ri_verified-badge-line.svg"
            alt="success-image"
            width={100}
            height={100}
          />
          <h1 className="text-center">Payment Successful</h1>
        </div>
      </div>
    </section>
  );
}





