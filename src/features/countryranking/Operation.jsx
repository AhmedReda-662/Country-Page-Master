import CountryStatus from "./CountryStatus";
import RegionFilter from "./RegionFilter";
import SortBy from "./SortBy";

export default function Operation() {
  return (
    <div className="basis-[25%] flex flex-col gap-10">
      <SortBy />
      <RegionFilter />
      <CountryStatus />
    </div>
  );
}
