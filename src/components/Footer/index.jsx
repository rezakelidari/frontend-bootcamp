import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="p-5">
      <Row className="gap-3 gap-md-0 align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <h2>By Reza Kelidari</h2>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <Button
            variant="dark"
            href="https://github.com/rezakelidari/frontend-bootcamp"
          >
            Open in Github
          </Button>
        </Col>
      </Row>
    </footer>
  );
}
