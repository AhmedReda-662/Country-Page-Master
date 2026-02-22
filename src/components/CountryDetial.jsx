import { useParams } from "react-router-dom";
import useCountryDetail from "../features/countrydetail/useCountryDetial";
import Spinner from "./UI/Spinner";
export default function CountryDetail() {
  const { countryName } = useParams();
  const { data, isLoading } = useCountryDetail(countryName);
  if (isLoading) {
    return <Spinner />;
  }
  console.log(data);
  const country = data[0];
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((c) => c.name)
        .join(", ")
    : "N/A";
  const capital = country.capital ? country.capital.join(", ") : "N/A";
  const subregion = country.subregion || "N/A";
  const continents = country.continents ? country.continents.join(", ") : "N/A";

  return (
    <div className="h-full overflow-y-auto">
      <div className="flex flex-col items-center">
        <div className="absolute top-50 w-48 h-32">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-medium mt-18">{country.name.common}</h1>
        <p className="mt-2">
          {country.name.nativeName?.eng?.official ?? country.name.official}
        </p>
      </div>
      <div className="flex justify-center gap-8 mt-5">
        <div className="flex items-center bg-dark-secondary rounded-lg overflow-hidden">
          <p className="text-sm font-medium px-4 py-3">Population</p>
          <div className="w-px self-stretch bg-dark-primary" />
          <p className="text-sm font-medium px-4 py-3">
            {country.population.toLocaleString()}
          </p>
        </div>
        <div className="flex items-center bg-dark-secondary rounded-lg overflow-hidden">
          <p className="text-sm font-medium px-4 py-3">Area (km²)</p>
          <div className="w-px self-stretch bg-dark-primary" />
          <p className="text-sm font-medium px-4 py-3">
            {country.area.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Detail rows */}
      <div className="mt-8 mx-auto max-w-3xl border-t border-dark-secondary">
        <div className="flex justify-between items-center py-5 border-b border-dark-secondary">
          <p className="text-sm text-gray-secondary">Capital</p>
          <p className="text-sm">{capital}</p>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-dark-secondary">
          <p className="text-sm text-gray-secondary">Subregion</p>
          <p className="text-sm">{subregion}</p>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-dark-secondary">
          <p className="text-sm text-gray-secondary">Language</p>
          <p className="text-sm">{languages}</p>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-dark-secondary">
          <p className="text-sm text-gray-secondary">Currencies</p>
          <p className="text-sm">{currencies}</p>
        </div>
        <div className="flex justify-between items-center py-5 border-b border-dark-secondary">
          <p className="text-sm text-gray-secondary">Continents</p>
          <p className="text-sm">{continents}</p>
        </div>
      </div>
    </div>
  );
}
