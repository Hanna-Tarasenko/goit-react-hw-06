import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
