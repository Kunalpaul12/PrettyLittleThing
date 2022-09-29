import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../../config';

export type productProps = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
};

interface HomeState {
  products: productProps[];
  loading: true | false;
  products_error: string;
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    products: [],
    products_error: '',
    loading: true,
  } as HomeState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products_error = action.payload;
    });
  },
});

export const fetchProducts = createAsyncThunk(
  'home/fetchProducts',
  async () => {
    const response = await axios.get(API.getProduct);
    return response.data;
  },
);

export default homeSlice.reducer;
