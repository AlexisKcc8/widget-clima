import React from "react";
import { useWeatherApp } from "../hooks/useWeatherApp";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";
import { Loader } from "./Loader";
import "./weatherApp.css";
import { ErrorMessage } from "./ErrorMessage";
export const WeatherApp = () => {
  const {
    weatherResponse,
    handleChangeCity,
    loading,
    errorsClient,
    errorRequest,
  } = useWeatherApp();
  if (errorRequest !== null) {
    console.log("salio mal");
  }
  return (
    <section className="weather-container">
      <h1 className="weather-container__title">The Weather</h1>
      <WeatherForm handleChangeCity={handleChangeCity} />

      {errorsClient ? (
        <ErrorMessage
          msg={
            "Solamente se aceptan letras y espacios en blanco, ingrese un nuevo destino"
          }
          bgColor={"#ff9500"}
        />
      ) : loading ? (
        <Loader />
      ) : (
        <WeatherMainInfo weather={weatherResponse} />
      )}
    </section>
  );
};
