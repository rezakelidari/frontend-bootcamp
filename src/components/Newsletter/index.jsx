import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Newsletter() {
  return (
    <section className="bg-primary text-light p-5 d-flex gap-1 flex-column flex-sm-row justify-content-between justify-content-lg-around text-center">
      <h3 className="mb-4 mb-sm-0">Sign Up For Our Newsletter</h3>
      <Form
        className="d-flex gap-1 align-items-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <Form.Control type="email" placeholder="Email address" />
        <Button type="submit" variant="outline-light">
          Register
        </Button>
      </Form>
    </section>
  );
}
