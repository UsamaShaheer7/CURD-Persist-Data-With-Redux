// Slices.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { newCustomer: [] };

const customerSlice = createSlice({
  name: 'customer',
  initialState: initialState,
  reducers: {
    setNewCustomer: (state, action) => {
      state.newCustomer = action.payload;
    },
  },
});

export const { setNewCustomer } = customerSlice.actions;
export default customerSlice.reducer;
