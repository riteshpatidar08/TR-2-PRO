//signup 
import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk
 } from "@reduxjs/toolkit"
import axios from "axios"

export const register = createAsyncThunk('/user/register', async(data,{rejectWithValue})=>{
    try {
      const res = axios.post('http://localhost:3000/api/register')
      console.log(res.data)
      return res.data
  }
     catch (error) {
        rejectWithValue(error)
    }

} )

const initialState = {
loading : false ,
error : null
}

const userSlice = createSlice({
    name : "user",
    initialState,
    extraReducers : (builder) => {
 builder.addCase(register.pending, (state)=>{
    state.loading = true ;
    state.error = null
 }).addCase(register.fulfilled , (state)=>{
    state.loading = false ;
    state.error = null
 }).addCase(register.rejected,(state,action)=>{
    state.loading = false ;
    state.error = action.payload
 })
    }
})

export default userSlice.reducer

//async thunk => we can use this middleware to implement all the asynchronous logic in the redux like api calling and then handle the states of the api in the slice like pending , failed , or fulfilled

//NOTE using createAsyncThunk we can implement the api logic which returns a promise and handle the promise states(pending,fulfilled , failed) in userSlice.

//NOTE createAsyncThunk accpets a action type and a function in which we are going to call the api.