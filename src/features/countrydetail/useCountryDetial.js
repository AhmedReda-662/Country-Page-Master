import { useQuery } from "@tanstack/react-query";
import { getCountryByName } from "../../service/apiCountry";

export default function useCountryDetail(name) {
  const { data, isLoading } = useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountryByName(name),
  });
  return { data, isLoading };
}
