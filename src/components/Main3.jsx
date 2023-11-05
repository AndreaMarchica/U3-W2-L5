import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { Col, Container, Row } from "react-bootstrap";
import Giuliacci from "../assets/giuliacci-removebg-preview.png";

const Main = ({ coordinates }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWeatherData = async () => {
      if (coordinates && coordinates.length > 0) {
        try {
          let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&units=metric&appid=0cc5872e7b2f580aab6bcb743dea4be8&lang=it`
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            setWeather(data);
          } else {
            throw new Error("Errore nel caricamento dei dati");
          }
        } catch (error) {
          alert(error);
        } finally {
          setLoading(false);
        }
      }
    };
    getWeatherData();
  }, [coordinates]);

  useEffect(() => {
    function getCurrentLocationWeather() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const apiKey = "0cc5872e7b2f580aab6bcb743dea4be8&lang=it";
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else {
        console.log("Geolocalizzazione non supportata dal tuo browser.");
      }
    }

    getCurrentLocationWeather();
  }, []);

  return (
    <Container>
      {loading ? (
        <div>
          <p>Sto cercando i dati meteorologici...</p>
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
        <div>
          <p>Non ci sono dati meteorologici disponibili.</p>
        </div>
      )}
    </Container>
  );
};

export default Main;
