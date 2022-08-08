import React from "react";
import { useWeatherForm } from "../hooks/useWeatherForm";

export const WeatherForm = (props) => {
  const { handleChangeCity } = props;
  const { infoForm, handleChange, handleSubmit } =
    useWeatherForm(handleChangeCity);

  const styleForm = {
    width: "25rem",
    maxwidth: "28rem",
    display: "flex",
    justifyContent: "center",
    padding: "0.625rem",
    maxWidth: "90%",
  };
  const styleInput = {
    padding: "0.3125rem",
    width: "90%",
    margin: "0 1rem 0 0",
    border: "none",
    borderRadius: "5px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.125rem",
  };
  const styleButton = {
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    backgroundColor: "#f045",
    padding: "10px",
    fontWeight: "bold",
  };
  return (
    <form onSubmit={handleSubmit} style={styleForm}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Enter your country"
        name="country"
        required
        value={infoForm.country}
        style={styleInput}
      />
      <input type="submit" value="Submit" style={styleButton} />
    </form>
  );
};
