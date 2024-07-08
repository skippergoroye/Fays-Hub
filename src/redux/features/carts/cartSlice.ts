import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from "../../app/store"

interface  CartsState {
    value: number,
}


const initialState: CartsState = {
    value: 0
}


const cartsSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
          },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        }
      
    }
})


export const selectCount = (state: RootState) => state.carts.value

export const { increment, decrement, incrementByAmount } = cartsSlice.actions
export default cartsSlice.reducer