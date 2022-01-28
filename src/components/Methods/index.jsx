import React from "react";
import { Button, Card, Container } from "react-bootstrap";

export default function Methods() {
  const methods = [
    {
      icon: "laptop",
      name: "Virtual",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
      link: "#",
    },
    {
      icon: "person-square",
      name: "Hybrid",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
      link: "#",
    },
    {
      icon: "people",
      name: "In Person",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?",
      link: "#",
    },
  ];
  return (
    <Container className="p-5">
      <div className="row">
        {methods.map((method) => (
          <div
            className="col-md d-flex flex-column align-items-center"
            key={method.name}
          >
            <Card bg="dark" className="text-light">
              <Card.Body className="text-center">
                <h1 className="mb-0">
                  <i className={`bi bi-${method.icon}`}></i>
                </h1>
                <Card.Title className="mb-3">{method.name}</Card.Title>
                <Card.Text>{method.desc}</Card.Text>
                <Button href={method.link}>Read more</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
