import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../reduce/cart"
import cart from "../reduce/cart";

const store = configureStore({
    reducer: {
        cart: carSlice
    }
})

export default store


