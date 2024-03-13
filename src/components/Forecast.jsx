import CityAutocomplete from "./CityAutocomplete";
import { useState, useEffect } from "react";
import { fetchCityForecast } from "@/services/forecastService";
import * as React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import spinner from '../assets/spinner.svg'

const Forecast = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [fetchedCity, setFetchedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const firstTimestamp = fetchedCity?.forecastTimestamps?.[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCity) {
          setLoading(true);
          const data = await fetchCityForecast(selectedCity);
          setFetchedCity(data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedCity]);

  return (
    <div>
      <h1 className="m-10 text-4xl">Lithuania Weather Forecast</h1>
      <CityAutocomplete onCitySelect={setSelectedCity} />
      <div className="flex justify-center mt-10">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>
              {selectedCity ? fetchedCity?.place.name : "Please choose a city"}
            </CardTitle>
            <CardDescription>
            {loading ? (
                <p>Loading...</p>
              ) : selectedCity ? (
                <p>Selected City Forecast</p>
              ) : (
                <p>Waiting for city...</p>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent >
            {loading ? (
                <div className="flex justify-center">
                    <img  className=" w-24 h-24" src={spinner} alt="Loading..." />
                </div>
            ) : (
                <div className="text-start">
                    <p>Air Temperature: {firstTimestamp?.airTemperature} °C </p>
                    <p>Feels Like Temperature: {firstTimestamp?.feelsLikeTemperature} °C</p>
                    <p>Wind Speed: {firstTimestamp?.windSpeed} km/h</p>
                    <p>Condition: {firstTimestamp?.conditionCode}</p>
                    <p>Humidity: {firstTimestamp?.relativeHumidity}</p>
                    <p>Pressure: {firstTimestamp?.seaLevelPressure}</p>
                </div>
            )}
          </CardContent>
          <CardFooter>
            <p>Sometimes the best forecast comes from simply looking out the window...</p>
          </CardFooter>
        </Card>
      </div>
      <p className="m-10 text-1xl">
        Stay ahead of the elements with our accurate and up-to-date weather
        forecast for Lithuania. Whether you're planning a day out or preparing
        for the week ahead, trust our prognosis to guide you through the
        ever-changing Lithuanian weather. Be prepared, stay informed, and make
        the most of every moment, rain or shine.
      </p>
    </div>
  );
};

export default Forecast;
