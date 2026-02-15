import SearchBar from "../../features/countryranking/searchCountry";
export default function Status({ found }) {
  return (
    <div className="flex items-center justify-between ">
      <div className="text-gray-secondary font-medium">
        Found {found} countries
      </div>
      <SearchBar />
    </div>
  );
}
