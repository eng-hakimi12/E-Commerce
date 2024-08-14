import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
import Product from "../../Component/Product";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        totalPrice: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload)
        },
        calculateTotalPrice: (state) => {
            let total = 0
            state.items.forEach( (Product) => {
                total += Product.price
            })
            state.totalPrice = total
        }
    }

})
export const {calculateTotalPrice} = cartSlice.actions
export const {addItemToCart} = cartSlice.actions
export default cartSlice.reducer