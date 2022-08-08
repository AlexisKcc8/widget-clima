import { useState, useEffect } from "react";
export const useWeatherApp = () => {
  const [weatherResponse, setWeatherResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState(null);
  const [errorsClient, setErrorsClient] = useState(false);
  useEffect(() => {
    loadWeather();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weatherResponse?.location.name ?? ""}`;
  }, [weatherResponse]);

  const validateCountry = (city) => {
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    if (regexName.test(city.trim())) {
      return true;
    } else {
      return false;
    }
  };
  const loadWeather = async (city = "london") => {
    const fullUrl = `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`;
    try {
      setLoading(true);
      let request = await fetch(fullUrl);
      let json = await request.json();
      setWeatherResponse(json);
      setLoading(false);
    } catch (err) {
      setErrorRequest(err);
    }
  };

  const handleChangeCity = (city) => {
    if (validateCountry(city)) {
      setErrorsClient(false);
      setWeatherResponse(null);
      loadWeather(city);
    } else {
      setErrorsClient(true);
    }
  };

  return {
    weatherResponse,
    handleChangeCity,
    loading,
    errorsClient,
    errorRequest,
  };
};
