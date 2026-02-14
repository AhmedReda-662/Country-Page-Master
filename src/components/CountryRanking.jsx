import SearchBar from "../features/countryranking/searchCountry";

export default function CountryRanking() {
  return (
    <div>
      <div className="flex items-center justify-between px-3">
        <div className="text-gray-secondary font-medium">
          Found 195 countries
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
