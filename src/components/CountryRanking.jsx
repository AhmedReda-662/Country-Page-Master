import { useSearchParams } from "react-router-dom";
import Operation from "../features/countryranking/Operation";
import Table from "../features/countryranking/Table";
import { useCountryRanking } from "../features/countryranking/useCountryRanking";
import Spinner from "./UI/Spinner";
import Status from "./UI/Status";

export default function CountryRanking() {
  let [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "Population";
  const regions = searchParams.getAll("region");
  const status = searchParams.get("status");

  const { data, isLoading } = useCountryRanking(status);

  if (isLoading) {
    return <Spinner />;
  }

  let dataCopy = [...data];
  if (sortBy === "Population") {
    dataCopy.sort((a, b) => b.population - a.population);
  } else if (sortBy === "Area") {
    dataCopy.sort((a, b) => b.area - a.area);
  } else {
    dataCopy.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }
  if (regions.length > 0) {
    dataCopy = dataCopy.filter((country) => regions.includes(country.region));
  }

  return (
    <div className="h-full px-3">
      <Status found={dataCopy.length} />
      <div className="flex gap-5 mt-10 h-full min-h-0 overflow-hidden">
        <Operation />
        <Table data={dataCopy} />
      </div>
    </div>
  );
}
