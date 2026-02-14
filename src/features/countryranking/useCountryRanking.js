import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../service/apiCountry";
import { useDispatch } from "react-redux";
import { setCountries } from "../../redux/countrySlice";
import { useEffect } from "react";

export function useCountryRanking() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCountries(data || []));
  }, [data, dispatch]);

  return { data, isLoading, error };
}
