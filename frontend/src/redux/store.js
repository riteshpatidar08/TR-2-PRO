import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import userReducer from './userSlice'
import productReducer from './productSlice'
const store = configureStore({
    reducer : {
        count : counterReducer,
        user : userReducer,
        product : productReducer
    }
})

console.log(store) ;
export default store ;

