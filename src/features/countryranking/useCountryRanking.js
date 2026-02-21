import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "../../service/apiCountry";

export function useCountryRanking(status) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["countries", status],
    queryFn: () => getAllCountries(status),
  });

  return { data, isLoading, error };
}
