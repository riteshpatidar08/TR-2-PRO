import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  product: [],
  loading: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  'fetch/product',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('http://localhost:3000/api/getproducts');
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        console.log(action.payload);
        state.product = action.payload.product;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      });
  },
});

export default productSlice.reducer ;