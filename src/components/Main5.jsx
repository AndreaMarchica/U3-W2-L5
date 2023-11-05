import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { Col, Container, Row } from "react-bootstrap";
// import Giuliacci from "../assets/giuliacci-removebg-preview.png";

const Main = ({ coordinates }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCurrentLocationWeather = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiKey = "0cc5872e7b2f580aab6bcb743dea4be8&lang=it";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=it`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setWeather(data);
              setLoading(false);
            })
            .catch((error) => {
              console.error(error);
              setLoading(false);
            });
        });
      } else {
        console.log("Geolocalizzazione non supportata dal tuo browser.");
        setLoading(false);
      }
    };

    getCurrentLocationWeather();
  }, []);

  return (
    <Container>
      {loading ? (
        <div>
          <p>Caricamento...</p>
        </div>
      ) : weather !== null ? (
        <Row>
          <Col md={6}>
            <div>
              <div className="bubble">
                <b>
                  <i>Buonasera</i>
                </b>
                , oggi a {weather.name} si prevede{" "}
                {weather.weather[0].description} con una temperatura di{" "}
                {Math.round(weather.main.temp)} °C
              </div>
              <div className="pointer"></div>
            </div>
          </Col>
          <Col
            md={6}
            className="d-flex justify-content-center align-items-center"
          >
            <CurrentWeather
              obj={weather}
              coordinates={coordinates}
            ></CurrentWeather>
          </Col>
        </Row>
      ) : (
        <Container>
          <p>Errore nel caricamento dei dati...</p>
        </Container>
      )}
    </Container>
  );
};

export default Main;
