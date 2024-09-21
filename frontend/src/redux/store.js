import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import userReducer from './userSlice'
const store = configureStore({
    reducer : {
        count : counterReducer,
        user : userReducer
    }
})

console.log(store) ;
export default store ;

