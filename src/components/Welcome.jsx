import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import { Col, Container, Row } from "react-bootstrap";
import Giuliacci from "../assets/giuliacci-removebg-preview.png";

const Welcome = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            <div className="bubble2">
              <b>
                <i>Buonasera!</i>
              </b>
              <br></br> Non posso raccomandare te come ho fatto con mio figlio
              Andrea, ma almeno posso darti le esatte previsioni meteo di tutto
              il mondo! <br></br> Cerca la località da te desiderata nella barra
              in alto e partiamo! (apri il menù se sei su mobile)
            </div>
            <div className="pointer"></div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={Giuliacci} alt="Giuliacci-is-smiling" />
          </div>{" "}
        </Col>
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
        ></Col>
      </Row>
    </Container>
  );
};

export default Welcome;
