import { useSearchParams } from "react-router-dom";

export default function Operation() {
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="basis-[25%]">
      <div>
        <p className="text-gray-secondary text-xs mb-3">Sort by</p>
        <select
          className="select select-neutral bg-dark-primary outline-0 foucs:outline-0 border border-dark-secondary rounded-xl shadow-[none]"
          onChange={(e) => setSearchParams({ sortBy: e.target.value })}
          value={searchParams.get("sortBy") || "Population"}
        >
          <option>Population</option>
          <option>Name</option>
          <option>Area</option>
        </select>
      </div>
    </div>
  );
}
