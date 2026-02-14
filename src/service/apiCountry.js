const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllCountries = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=flags,name,population,area,region`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch countries: ${err.message}`);
  }
};

export const getCountryByName = async (countryName) => {
  try {
    const response = await fetch(
      `${BASE_URL}/name/${countryName}?fullText=true`,
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch country details: ${err.message}`);
  }
};
