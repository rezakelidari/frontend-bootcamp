import React from "react";
import { Button, Container } from "react-bootstrap";

import Banner from "../../assets/img/showcase.svg";

export default function Header() {
  return (
    <section className="bg-dark text-light p-5 text-center text-sm-start">
      <Container>
        <div className="d-sm-flex align-items-center justify-content-center">
          <div>
            <h1>
              Become a <span className="text-warning">Web Developer</span>
            </h1>
            <p className="lead my-4">
              We focus on teaching our students the fundamentals of the latest
              and greatest technologies to prepare them for their first dev role
            </p>
            <Button>Start the Enrollment</Button>
          </div>
          <img src={Banner} className="img-fluid w-50 d-none d-sm-block" />
        </div>
      </Container>
    </section>
  );
}
