import { useState } from "react";
const initialForm = {
  country: "",
};
export const useWeatherForm = (handleChangeCity) => {
  const [infoForm, setInfoForm] = useState(initialForm);
  const handleChange = (evn) => {
    const event = evn.target;
    setInfoForm({
      ...infoForm,
      [event.name]: event.value,
    });
  };
  const handleSubmit = (evn) => {
    evn.preventDefault();

    handleChangeCity(infoForm.country);
    setInfoForm(initialForm);
  };

  return {
    infoForm,
    handleChange,
    handleSubmit,
  };
};
