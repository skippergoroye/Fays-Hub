'use client'

import Image from 'next/image';
import { RootState } from '../../redux/app/store';
import { useAppSelector, useAppDispatch } from "../../redux/app/hooks";
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/features/cart/cartSlice';
import Link from 'next/link';


const CartPage = () => {
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const dispatch = useAppDispatch();
 

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
              <Image src={item.imgIcon} alt={item.title} width={100} height={100} />
              <p>{item.title}</p>
              <div className="flex items-center">
                <button onClick={() => dispatch(decrementQuantity(item.id))} className="px-2">-</button>
                <p className="px-2">{item.quantity}</p>
                <button onClick={() => dispatch(incrementQuantity(item.id))} className="px-2">+</button>
              </div>
              <p>{item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500">x</button>
            </div>
          ))}
          <Link href="/checkout">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
