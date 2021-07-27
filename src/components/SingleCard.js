import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import img1 from "../assets/1.png";

const SingleCard = () => {
  const name = "Obie San";
  const city_name = "Clayburgh";
  const street_address = "01602 Monserrate Highway";
  const country = "Palau";

  const [state, setstate] = useState(true);
  return (
    <Card className="single_card" bg="outline">
      <Card.Img variant="top" src={img1} className="card_img" />
      <Card.Body>
        <Card.Title style={{ color: "brown" }}>Name: {name}</Card.Title>
        <Button
          variant="success"
          className={`${!state ? "hide" : "mb-2"}`}
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setstate(!state)}
        >
          {`${state ? "View Detail" : "Hide Detail"}`}
        </Button>

        <Card.Text className="collapse" id="collapseExample">
          <span>
            <strong>City</strong>: {city_name}
          </span>
          <br />
          <span>
            <strong>Street</strong>: {street_address}
          </span>
          <br />
          <span>
            <strong>Country</strong>: {country}
          </span>
          <Button
            variant="danger"
            style={{ color: "black" }}
            className={`${state ? "hide" : "mt-2"}`}
            data-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            onClick={() => setstate(!state)}
          >
            {`${state ? "View Detail" : "Hide Detail"}`}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleCard;
