import { useSearchParams } from "react-router-dom";
import Operation from "../features/countryranking/Operation";
import Table from "../features/countryranking/Table";
import { useCountryRanking } from "../features/countryranking/useCountryRanking";
import Spinner from "./UI/Spinner";
import Status from "./UI/Status";

export default function CountryRanking() {
  const { data, isLoading } = useCountryRanking();
  let [searchParams] = useSearchParams();
  if (isLoading) {
    return <Spinner />;
  }

  const sortBy = searchParams.get("sortBy") || "Population";
  if (sortBy === "Population") {
    data.sort((a, b) => b.population - a.population);
  } else if (sortBy === "Area") {
    data.sort((a, b) => b.area - a.area);
  } else {
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  return (
    <div className="h-full px-3">
      <Status found={data.length} />
      <div className="flex gap-5 mt-10 h-full min-h-0 overflow-hidden">
        <Operation />
        <Table data={data} />
      </div>
    </div>
  );
}
