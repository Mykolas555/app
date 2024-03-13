export const fetchCityData = async () => {
    try {
      const response = await fetch('https://api.meteo.lt/v1/places');
      if (!response.ok) {
        throw new Error('Failed to fetch city data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

export const fetchCityForecast = async (selectedCity) => {
    try {
      const response = await fetch(`https://api.meteo.lt/v1/places/${selectedCity}/forecasts/long-term`);
      if (!response.ok) {
        throw new Error('Failed to fetch city data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };


  