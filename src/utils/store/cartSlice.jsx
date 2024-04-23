import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    filteredItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      state.filteredItem = state.items.filter((i) => i.id == action.payload.id);
    },
    // filterItem: (state, action) => {
     
    // },
    removeItem: (state) => {
      state.items.pop();
    },
    cleartCart: (state) => {
      state.items.length = 0;
    },
  },
});
export const { addItem, removeItem, cleartCart } = cartSlice.actions;
export default cartSlice.reducer;
