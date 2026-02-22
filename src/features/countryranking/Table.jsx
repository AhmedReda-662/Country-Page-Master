import { Link } from "react-router-dom";

export default function Table({ data }) {
  return (
    <div className="flex-1 overflow-y-auto h-full min-h-0">
      <div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Flag</th>
              <th>Name</th>
              <th>Population</th>
              <th>Area (km²)</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country) => {
              return (
                <tr key={country.name.common} className="text-gray-secondary">
                  <td>
                    <Link to={`/country/${country.name.common}`}>
                      <img
                        src={country.flags.png}
                        alt={country.name.common + " flag"}
                        className="w-16 h-10 object-cover rounded-md"
                      />
                    </Link>
                  </td>
                  <td>{country.name.common}</td>
                  <td>{country.population.toLocaleString()}</td>
                  <td>{country.area.toLocaleString()}</td>
                  <td>{country.region}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
