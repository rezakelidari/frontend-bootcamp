import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

import Banner from "../../assets/img/showcase.svg";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="bg-dark text-light p-5 text-center text-sm-start">
        <Container>
          <div className="d-sm-flex align-items-center justify-content-center">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role
              </p>
              <Button onClick={() => setShow(true)}>
                Start the Enrollment
              </Button>
            </div>
            <img
              src={Banner}
              className="img-fluid w-50 d-none d-sm-block"
              alt="Banner"
            />
          </div>
        </Container>
      </section>
      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enrollment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Fill out this form and we will get back to you</p>
          <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Group>
              <Form.Label>Full Name:</Form.Label>
              <Form.Control type="text" placeholder="John Doe" name="name" />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="info@exapmle.com"
                name="email"
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="tel"
                placeholder="info@exapmle.com"
                name="tel"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
