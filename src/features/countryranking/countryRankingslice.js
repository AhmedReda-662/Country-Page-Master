import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "population",
};

const countryRankingSlice = createSlice({
  name: "countryRanking",
  initialState,
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { setCountryRank, sortCountryRank } = countryRankingSlice.actions;

export default countryRankingSlice.reducer;
