import { useSearchParams } from "react-router-dom";
const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function RegionFilter() {
  let [searchParams, setSearchParams] = useSearchParams();
  let regions = searchParams.getAll("region");
  function handleRegionChange(region) {
    setSearchParams((searchParams) => {
      if (regions.includes(region)) {
        const newRegions = regions.filter((r) => r !== region);
        searchParams.delete("region");
        newRegions.forEach((r) => searchParams.append("region", r));
      } else {
        searchParams.append("region", region);
      }
      return searchParams;
    });
  }
  return (
    <div>
      <p className="text-gray-secondary text-xs mb-3">Region</p>
      <div className="flex flex-wrap gap-1.5">
        {REGIONS.map((region) => (
          <button
            key={region}
            className={`text-gray-secondary font-medium cursor-pointer duration-75 hover:text-white hover:bg-dark-secondary px-3 py-2 rounded-xl text-sm ${searchParams.getAll("region").includes(region) ? "bg-dark-secondary text-white" : ""}`}
            onClick={() => handleRegionChange(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
