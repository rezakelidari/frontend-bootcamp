import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Instructurs() {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      axios.get("https://randomuser.me/api/").then((result) => {
        setInstructors((oldInstructors) => [
          ...oldInstructors,
          {
            name:
              result.data.results[0].name.first +
              " " +
              result.data.results[0].name.last,
            image: result.data.results[0].picture.large,
          },
        ]);
      });
    }

    setLoading(false);
  }, []);

  return (
    <section className="p-5 bg-primary" id="instructors">
      <Container>
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <Row className="g-4">
          {loading
            ? "Loading"
            : instructors.map((item) => (
                <Col xs="12" sm="6" lg="3" key={item.name}>
                  <Card bg="dark" className="text-light text-center">
                    <Card.Body>
                      <img
                        src={item.image}
                        className="rounded-circle mb-3"
                        alt={item.name}
                      />
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit illum iusto animi asperiores illo. Laudantium!
                      </Card.Text>
                      <a href="#">
                        <i className="bi bi-twitter mx-1 text-light"></i>
                        <i className="bi bi-facebook mx-1 text-light"></i>
                        <i className="bi bi-linkedin mx-1 text-light"></i>
                        <i className="bi bi-instagram mx-1 text-light"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
        </Row>
      </Container>
    </section>
  );
}
