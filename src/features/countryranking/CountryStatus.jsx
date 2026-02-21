import { useSearchParams } from "react-router-dom";

export default function CountryStatus() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    setSearchParams((prev) => {
      if (prev.get("status") === e.target.value) {
        prev.delete("status");
      } else if (prev.get("status")) {
        return prev;
      } else {
        prev.append("status", e.target.value);
      }
      return prev;
    });
  }
  const status = searchParams.get("status");
  return (
    <div>
      <p className="text-gray-secondary text-xs mb-3">Status</p>
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-3.5">
          <input
            type="checkbox"
            className="checkbox border-gray-primary-600 checked:bg-blue-primary checked:text-gray-secondary"
            value={"member"}
            checked={status === "member"}
            onChange={handleChange}
          />
          <p className="text-gray-secondary text-sm capitalize">
            Member of the united nations
          </p>
        </div>
        <div className="flex items-center gap-3.5">
          <input
            type="checkbox"
            className="checkbox border-gray-primary-600 checked:bg-blue-primary checked:text-gray-secondary"
            value={"independent"}
            checked={status === "independent"}
            onChange={handleChange}
          />
          <p className="text-gray-secondary text-sm capitalize">Independent</p>
        </div>
      </div>
    </div>
  );
}
