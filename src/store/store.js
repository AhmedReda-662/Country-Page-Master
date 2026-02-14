import { configureStore } from "@reduxjs/toolkit";

import CountryRankingReducer from "../features/countryranking/countryRankingslice";
// import CountryDetailReducer from "../features/countrydetail/countryDetailslice";

const store = configureStore({
  reducer: {
    countryRanking: CountryRankingReducer,
    // countryDetail: CountryDetailReducer,
  },
});

export default store;
