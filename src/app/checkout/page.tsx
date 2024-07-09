// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { RootState } from "../../redux/app/store";
// import { useAppSelector } from "../../redux/app/hooks";
// import { Footer, Navbar } from "@/components";

// export default function Checkout() {
//   const cartItems = useAppSelector((state: RootState) => state.cart.items);

//   const totalAmount = cartItems.reduce((total, item) => {
//     const price = parseFloat(item.price.replace("$", ""));
//     return total + price * item.quantity;
//   }, 0);

//   const handlePlaceOrder = () => {
//     localStorage.removeItem("cart");
//     alert("Order placed successfully!");
//   }

//   return (
//     <section>
//       <div className="px-6 lg:px-16 mb-20">
//         <Navbar />
//         <div className="flex">
//           <div className="w-1/2">
//             <h1 className="font-bold text-xl font-opensans">Personal Details</h1>
//             <div className="flex flex-col gap-6 mt-4">
//               <div className="flex flex-col gap-2">
//                 <label htmlFor="">Full Name</label>
//                 <input
//                   type="text"
//                   placeholder="Gift Omos"
//                   className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-[512px]"
//                 />
//               </div>

//               <div className="flex gap-10">
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="">Email Address</label>
//                   <input
//                     type="text"
//                     placeholder="giftomos93@gmail.com"
//                     className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label htmlFor="">Phone Number</label>
//                   <input
//                     type="text"
//                     placeholder="08122366086"
//                     className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                   />
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <h1 className="mb-4 font-bold text-xl font-opensans">Shipping Information</h1>
//                 <div className="flex gap-10 mb-4">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Country</label>
//                     <input
//                       type="text"
//                       placeholder="Nigeria"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">State</label>
//                     <input
//                       type="text"
//                       placeholder="Lagos"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-10">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">City</label>
//                     <input
//                       type="text"
//                       placeholder="Berger"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Zip Code</label>
//                     <input
//                       type="text"
//                       placeholder="123456"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                 </div>
//               </div>


//               <div className="flex flex-col gap-2">
//                 <label htmlFor="">Address</label>
//                 <input
//                   type="text"
//                   placeholder="20, lagos state"
//                   className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-[512px]"
//                 />
//               </div>

//               <div className="mt-4">
//                 <h1 className="mb-4 font-bold text-xl font-opensans">Payment Details</h1>
//                 <div className="flex gap-10 mb-4">
//                 <div className="flex justify-center items-center  gap-2">
//                     <input
//                       type="radio"
//                       placeholder="Lagos"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0"
//                     />
//                     <label htmlFor="">Debit Card</label>
//                   </div>
                
//                   <div className="flex justify-center items-center  gap-2">
//                     <input
//                       type="radio"
//                       placeholder="Lagos"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0"
//                     />
//                     <label htmlFor="">Paypal</label>
//                   </div>
//                 </div>

//                 <div className="flex gap-10">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">City</label>
//                     <input
//                       type="text"
//                       placeholder="Berger"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Zip Code</label>
//                     <input
//                       type="text"
//                       placeholder="123456"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-60"
//                     />
//                   </div>
//                 </div>
//               </div>



//               <div className="mt-4">
//                 <h1 className="mb-4 font-bold text-xl font-opensans">Card Details</h1>
//                 <div className="flex gap-10 mb-4">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Name on card</label>
//                     <input
//                       type="text"
//                       placeholder="Nigeria"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-[516px]"
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-10">
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Card Number</label>
//                     <input
//                       type="password"
//                       placeholder=".........."
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-46"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">Expiry date</label>
//                     <input
//                       type="text"
//                       placeholder="05/27"
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-26"
//                     />
//                   </div>

//                   <div className="flex flex-col gap-2">
//                     <label htmlFor="">CVV</label>
//                     <input
//                       type="password"
//                       placeholder="..."
//                       className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-16"
//                     />
//                   </div>
//                 </div>
//               </div>



//             </div>
//           </div>


//           <div className="p-6 w-1/2">
//             <h1 className="text-2xl font-bold mb-4">Checkout</h1>
//             <div className="mb-6">
//               <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
//               {cartItems.length === 0 ? (
//                 <p>Your cart is empty</p>
//               ) : (
//                 <div>
//                   {cartItems.map((item) => (
//                     <div
//                       key={item.id}
//                       className="flex items-center justify-between mb-4 border-b pb-4"
//                     >
//                       <Image
//                         src={item.imgIcon}
//                         alt={item.title}
//                         width={100}
//                         height={100}
//                       />
//                       <p>{item.title}</p>
//                       <p>
//                         {item.quantity} x {item.price}
//                       </p>
//                       <p>
//                         $
//                         {(
//                           parseFloat(item.price.replace("$", "")) *
//                           item.quantity
//                         ).toFixed(2)}
//                       </p>
//                     </div>
//                   ))}
//                   <div className="flex justify-between mt-4 border-t pt-4">
//                     <p className="text-xl font-semibold">Total</p>
//                     <p className="text-xl font-semibold">
//                       ${totalAmount.toFixed(2)}
//                     </p>
//                   </div>
//                   <button
//                     onClick={handlePlaceOrder}
//                     className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg"
//                   >
//                     Pay Now
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </section>
//   );
// }




"use client"
import React, { useState } from "react";
import Image from "next/image";
import { RootState } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/hooks";
import { Footer, Navbar } from "@/components";

export default function Checkout() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  const handlePlaceOrder = () => {
    localStorage.removeItem("cart");
    alert("Order placed successfully!");
  };

  return (
    <section>
      <div className="px-6 lg:px-16 mb-20">
        <Navbar />
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:pr-6">
            <h1 className="font-bold text-xl font-opensans">Personal Details</h1>
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="">Full Name</label>
                <input
                  type="text"
                  placeholder="Gift Omos"
                  className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">Email Address</label>
                  <input
                    type="text"
                    placeholder="giftomos93@gmail.com"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    placeholder="08122366086"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
              </div>

              <h1 className="mb-4 font-bold text-xl font-opensans">Shipping Information</h1>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">Country</label>
                  <input
                    type="text"
                    placeholder="Nigeria"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">State</label>
                  <input
                    type="text"
                    placeholder="Lagos"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    placeholder="Berger"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">Zip Code</label>
                  <input
                    type="text"
                    placeholder="123456"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="20, lagos state"
                  className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                />
              </div>

              <h1 className="mb-4 font-bold text-xl font-opensans">Payment Details</h1>
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    placeholder="Lagos"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0"
                  />
                  <label htmlFor="">Debit Card</label>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    placeholder="Lagos"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0"
                  />
                  <label htmlFor="">Paypal</label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    placeholder="Berger"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <label htmlFor="">Zip Code</label>
                  <input
                    type="text"
                    placeholder="123456"
                    className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="mb-4 font-bold text-xl font-opensans">Card Details</h1>
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label htmlFor="">Name on card</label>
                    <input
                      type="text"
                      placeholder="Nigeria"
                      className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label htmlFor="">Card Number</label>
                    <input
                      type="password"
                      placeholder=".........."
                      className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label htmlFor="">Expiry date</label>
                    <input
                      type="text"
                      placeholder="05/27"
                      className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label htmlFor="">CVV</label>
                    <input
                      type="password"
                      placeholder="..."
                      className="border border-[#C0C0C0] p-2 rounded-lg focus:outline-none focus-visible:ring-0 w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
                      <Image src={item.imgIcon} alt={item.title} width={100} height={100} />
                      <p>{item.title}</p>
                      <p>
                        {item.quantity} x {item.price}
                      </p>
                      <p>
                        $
                        {(
                          parseFloat(item.price.replace("$", "")) *
                          item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  ))}
                  <div className="flex justify-between mt-4 border-t pt-4">
                    <p className="text-xl font-semibold">Total</p>
                    <p className="text-xl font-semibold">
                      ${totalAmount.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

