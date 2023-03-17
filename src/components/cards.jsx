//import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Card from "react-bootstrap/Card";
import "./../css/cardcss.css"
import {Col} from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
    <Col>
      <Card style={{ width: "18rem"}} key={props.key}>
        <Card.Img variant="top" src={props.photo} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            <p>{props.descrip}</p>
          </Card.Text>
          
        </Card.Body>
      </Card>
      <br/>
      </Col>
    </>
  );
};

export default Cards;
