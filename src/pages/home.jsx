import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusell from "../components/carrusel";
import {Container,Button,Row} from 'react-bootstrap';
import NewCars from "../components/NewCars";



const Home = () => {
  return (
    <>
      <Carrusell />
      <br />
      <Container fluid="md">
        <center>
          <h3>Nuevos vehiculos</h3>
          <br/>
        </center>
        <div className="con">
        <Row>
          <NewCars />
        </Row>
        </div>
        <center>
          <Button variant="outline-secondary">Secondary</Button>{" "}
        </center>
      </Container>
    </>
  );
};


export default Home;