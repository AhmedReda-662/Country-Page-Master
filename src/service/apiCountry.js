const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getAllCountries = async (status) => {
  let url = `${BASE_URL}/all?fields=flags,name,population,area,region`;
  if (status !== undefined && status !== null) {
    status = status === "member" ? true : false;
    url = `${BASE_URL}/independent?status=${status}&fields=flags,name,population,area,region`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch countries`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch countries: ${err.message}`);
  }
};
