import React from "react";
import { Container } from "react-bootstrap";

import Funda from "../../assets/img/fundamental.svg";
import ReactJS from "../../assets/img/react.svg";

export default function Learn() {
  return (
    <>
      <section className="p-5" id="learn">
        <Container>
          <div className="row align-items-center justify-content-center">
            <div className="col-md p-5">
              <h2>Learn Fundamental</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus qui asperiores enim minus doloremque fugit.
              </p>
              <a href="#" className="btn btn-dark mt-3">
                Read more <i className="bi bi-chevron-right"></i>
              </a>
            </div>
            <div className="col-md">
              <img src={Funda} alt="Banner" className="img-fluid" />
            </div>
          </div>
        </Container>
      </section>

      <section className="p-5 bg-dark text-light">
        <Container>
          <div className="row align-items-center justify-content-center">
            <div className="col-md">
              <img src={ReactJS} alt="Banner" className="img-fluid" />
            </div>
            <div className="col-md p-5">
              <h2>Learn React</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus qui asperiores enim minus doloremque fugit.
              </p>
              <a href="#" className="btn btn-light mt-3">
                Read more <i className="bi bi-chevron-right"></i>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
