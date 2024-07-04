import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchText: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchText = action.payload; 
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
