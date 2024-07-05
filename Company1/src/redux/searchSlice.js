import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    city:'',
    searchText: '',
    price:{
      higher:'',
      lower:'',
    },
    property:'',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchText = action.payload; 
    },
    setPriceRange:(state,action)=>{
      state.price.higher = action.payload[1];
      state.price.lower = action.payload[0];
    },
    setPropertyRange:(state,action)=>{
      state.property = action.payload;
    },
    setCity:(state,action)=>{
      state.city = action.payload;
    },
  },
});

export const { setSearchTerm , setPriceRange,setPropertyRange,setCity } = searchSlice.actions;

export default searchSlice.reducer;
