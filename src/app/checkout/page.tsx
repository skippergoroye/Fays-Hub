"use client"

import React, {useState} from 'react'
import Image from 'next/image';
import { RootState } from '../../redux/app/store';
import { useAppSelector } from "../../redux/app/hooks";



export default function Checkout() {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return total + price * item.quantity;
  }, 0);



  const handlePlaceOrder = () => {
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
  };







  return (
    <div className="p-6">
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
                <p>{item.quantity} x {item.price}</p>
                <p>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
              </div>
            ))}
            <div className="flex justify-between mt-4 border-t pt-4">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl font-semibold">${totalAmount.toFixed(2)}</p>
            </div>
            <button 
              onClick={handlePlaceOrder}
              className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Pay Now
            </button>
           
          </div>
        )}
      </div>
    </div>
  )
}
