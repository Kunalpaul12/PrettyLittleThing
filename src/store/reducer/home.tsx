import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {API} from '../../config';

export type productProps = {
  id: number;
  colour: string;
  name: string;
  price: number;
  img: string;
  quantity?: number;
};

interface HomeState {
  products: productProps[];
  loading: true | false;
  products_error: string;
  total: number;
}

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    products: [],
    products_error: '',
    loading: true,
    total: 0,
  } as HomeState,
  reducers: {
    add: (state, action) => {
      const data = state.products;
      data.forEach(e => {
        if (e.id === action.payload) {
          e.quantity = e.quantity ? e.quantity + 1 : 1;
          state.total += e.price;
        }
      });
      state.products = data;
    },
    remove: (state, action) => {
      const data = state.products;
      data.forEach(e => {
        if (e.id === action.payload) {
          e.quantity = e.quantity ? e.quantity - 1 : 0;
          state.total -= e.price;
        }
      });
      state.products = data;
    },
  },
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

export const {add, remove} = homeSlice.actions;

export default homeSlice.reducer;
