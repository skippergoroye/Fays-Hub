"use client"
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/app/hooks'
import { decrement, increment } from '../../redux/features/carts/cartSlice'



export default function Navbar() {
  const count = useAppSelector(state => state.carts.value)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className='bg-red-500'>
        <h2>{count}</h2>
        <div className="flex gap-2 items-center justify-center">
          <button onClick={() => dispatch(increment())} className="rounded-full bg-red-500 px-6">Increment</button>
          <button onClick={() => dispatch(decrement())} className="rounded-full bg-blue-500 px-6">Decrement</button>
        </div>
      </div>
    </>
  )
}