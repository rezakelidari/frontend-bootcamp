import React, { useEffect } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxGl from "mapbox-gl";

export default function Contact() {
  const contactInfo = [
    { title: "Main Loc.", data: "50, Main st, Boston, NY" },
    { title: "Enrollment Phone", data: "(555) 555-5555" },
    { title: "Student Phone", data: "(333) 333-3333" },
    { title: "Enrollment Email", data: "enroll@frontendbc.test" },
    { title: "Student Email", data: "student@frontendbc.test" },
  ];

  useEffect(() => {
    mapboxGl.accessToken =
      "pk.eyJ1IjoicmV6YWtlbGlkYXJpIiwiYSI6ImNreXlmMWdkZzByejkycXMzemx4Nm90eDYifQ.ayc4brKrVPQWIYX8yWlQfw";

    new mapboxGl.Map({
      container: "mapbox-map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [51.338, 35.6997],
      zoom: 15,
    });
  }, []);

  return (
    <section className="p-5 bg-dark text-light d-flex flex-column gap-3">
      <h2 className="text-center">Contact US</h2>
      <Row className="gap-3 gap-md-0">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <ListGroup variant="flush">
            {contactInfo.map((item) => (
              <ListGroup.Item
                className="bg-dark text-light border-0"
                key={item.title}
              >
                <span className="fw-bold">{item.title}:</span> {item.data}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <div
            id="mapbox-map"
            style={{
              width: "100%",
              maxWidth: "350px",
              height: "100%",
              minHeight: "170px",
              borderRadius: 10,
            }}
          ></div>
        </Col>
      </Row>
    </section>
  );
}
