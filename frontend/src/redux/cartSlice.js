import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    totalQuantity : 0,
    totalPrice : 0
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart : (state,action) => {
            
            const newItem = action.payload
    const existingItem = state.items.find((item)=>item._id === newItem._id)
      if(!existingItem){
            state.items.push({
                _id : newItem._id,
                name : newItem.name ,
                price : newItem.price,
                discountPrice : newItem.discountPrice,
                image : newItem.image ,
                quantity : 1
            })
        }else {
            existingItem.quantity++ 
        }
        state.totalQuantity++ ,
        state.totalPrice += newItem.discountPrice
        },
        removeItems : (state,action) => {
            const itemID = action.payload ;
            const existingItem = state.items.find((item) => item._id === itemID)

            if(existingItem.quantity === 1){
                state.items = state.items.filter((item)=> item._id !== newID)
            }else {
                existingItem.quantity--
            }
           state.totalQuantity--
           state.totalPrice -= existingItem.discountPrice
        }
      
    }
})



export const {addToCart , removeItems} = cartSlice.actions
export default cartSlice.reducer