import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
const store = configureStore({
    reducer : {
        count : counterReducer,
        user : userReducer,
        product : productReducer,
        cart :  cartReducer
    }
})



console.log(store) ;
export default store ;

