const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filter: "",
  search: "",
  sort: "",
};

const filterSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    sortSelected: (state, action) => {
      state.sort = action.payload;
    },
    filterSelected: (state, action) => {
      state.filter = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { sortSelected, filterSelected, search } = filterSlice.actions;
