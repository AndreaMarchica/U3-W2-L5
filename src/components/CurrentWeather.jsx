/* eslint-disable no-useless-concat */
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import TempMax from "../assets/icons8-temperatura-elevata-100.png";
import TempMin from "../assets/icons8-temperatura-bassa-100.png";
import Humidity from "../assets/icons8-umidità-100.png";
import Sunrise from "../assets/icons8-alba-96.png";
import Sunset from "../assets/icons8-tramonto-96.png";
import Wind from "../assets/icons8-manica-a-vento-100.png";

const CurrentWeather = (props) => {
  const currentDate = new Date();
  const sunrise = new Date(props.obj.sys.sunrise * 1000);
  const sunriseHours = sunrise.getHours().toString().padStart(2, "0");
  const sunriseMinutes = sunrise.getMinutes().toString().padStart(2, "0");
  const sunset = new Date(props.obj.sys.sunset * 1000);
  const sunsetHours = sunset.getHours().toString().padStart(2, "0");
  const sunsetMinutes = sunset.getMinutes().toString().padStart(2, "0");

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h5 className="my-3">{currentDate.toLocaleDateString("it-IT")}</h5>
        <Card id="current-weather-card" className="mb-5">
          <Card.Body className="text-center">
            <Card.Title className="text-center">
              {props.obj.name}, {props.obj.sys.country}
            </Card.Title>
            <img
              id="current-weather-img"
              src={`http://openweathermap.org/img/wn/${props.obj.weather[0].icon}.png`}
              alt="wheather indicator"
            />
            <Card.Text className="fw-bold">
              {Math.round(props.obj.main.temp) + " " + "°C"}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="text-center fw-bold ">
              {props.obj.weather[0].description.toUpperCase()}
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold text-center">
              <img src={TempMax} alt="temp-max" className="icone" />{" "}
              {Math.round(props.obj.main.temp_max) + " " + "°C"} |{" "}
              {Math.round(props.obj.main.temp_min) + " " + "°C"}{" "}
              <img src={TempMin} alt="temp-min" className="icone" />
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold text-center">
              <img src={Humidity} alt="humidity" className="icone" />{" "}
              {props.obj.main.humidity + " " + "%"}
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold text-center">
              <img src={Sunrise} alt="sunrise" className="icone" />{" "}
              {sunriseHours + ":" + sunriseMinutes} |{" "}
              {sunsetHours + ":" + sunsetMinutes}{" "}
              <img src={Sunset} alt="sunset" className="icone" />
            </ListGroup.Item>
            <ListGroup.Item className="fw-bold text-center">
              <img src={Wind} alt="wind" className="icone" />{" "}
              {props.obj.wind.speed + " " + "m/sec"}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </>
  );
};

export default CurrentWeather;
