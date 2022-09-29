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
      const index = action?.payload;
      const productObj: productProps = state.products[index];
      if (productObj.hasOwnProperty('quantity')) {
        productObj.quantity = productObj?.quantity + 1;
      } else {
        productObj.quantity = 1;
      }
      data[index] = productObj;
      state.products = data;
      state.total = Number((state.total + data[index].price).toFixed(2));
    },
    remove: (state, action) => {
      const data = state.products;
      const index = action?.payload;
      data[index].quantity = data[index].quantity - 1;
      state.products = data;
      state.total = Number((state.total - data[index].price).toFixed(2));
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
