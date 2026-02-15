import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../service/apiCountry";

export function useCountryRanking() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
  });

  return { data, isLoading, error };
}
