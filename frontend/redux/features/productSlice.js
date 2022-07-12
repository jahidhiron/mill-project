import { createSlice } from '@reduxjs/toolkit';

export const product = createSlice({
  name: 'product',
  initialState: {
    products: [],
    product: {},
    message: '',
  },
  reducers: {
    // add
    addProduct: (state) => state,
    addProductSuccess: (state, action) => {
      state.message = action.payload;
    },

    // reset
    resetMessage: (state) => {
      state.message = null;
    },
  },
});

export const { addProduct, addProductSuccess } = product.actions;

export default product.reducer;
