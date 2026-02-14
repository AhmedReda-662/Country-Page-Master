import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryRank: [],
};

const countryRankingSlice = createSlice({
  name: "countryRanking",
  initialState,
  reducers: {
    setCountryRank(state, action) {
      state.countryRank = action.payload;
    },
    sortCountryRank(state, action) {
      const sortBy = action.payload;
      state.countryRank.sort((a, b) => {
        if (sortBy === "name") {
          return a.name.common.localeCompare(b.name.common);
        } else if (sortBy === "population") {
          return b.population - a.population;
        } else {
          return b.area - a.area;
        }
      });
    },
  },
});

export const { setCountryRank, sortCountryRank } = countryRankingSlice.actions;

export default countryRankingSlice.reducer;
