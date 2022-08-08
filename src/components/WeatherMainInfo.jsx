import React from "react";
import "./weatherMainInfo.css";
export const WeatherMainInfo = (props) => {
  const { weather } = props;
  return (
    <section className="main-info">
      <section className="main-info__container-title-country">
        <article className="main-info__container-title-img">
          <h3>
            {weather?.location.name}, {weather?.location.country}
          </h3>

          <img
            className="main-info__img"
            src={`http:${weather?.current.condition.icon}`}
            width="122"
            alt={weather?.location.name}
          />

          <h3 className="main-info__title-country">
            {weather?.current.condition.text} : {weather?.current.temp_c}°
          </h3>
        </article>
      </section>

      <section className="main-info__container-iframe">
        <div className="main-info__container-longitud-latitud">
          <h4>longitud: {weather?.location.lon}</h4>
          <h4>latitud: {weather?.location.lat}</h4>
        </div>
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather?.location.lon}5!3d${weather?.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          className="main-info__iframe"
        ></iframe>
      </section>
    </section>
  );
};
