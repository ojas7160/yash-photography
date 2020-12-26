import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import logo2 from '../../img/core-img/logo2.png'

const footer = (props) => (
  <footer className={props.theme + " footer-area"}>
    <Container>
      <Row>
        <Col>
          <div className="footer-content d-flex align-items-center justify-content-between">
            <div className="copywrite-text">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                  Colorlib
                </a>
              </p>
            </div>

            <div className="footer-logo">
              <a>
                <img src={logo2} alt="" />
              </a>
            </div>

            <div className="social-info">
              <a>
                <i className="ti-facebook" aria-hidden="true"></i>
              </a>
              <a>
                <i className="ti-twitter-alt" aria-hidden="true"></i>
              </a>
              <a>
                <i className="ti-linkedin" aria-hidden="true"></i>
              </a>
              <a>
                <i className="ti-pinterest" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);
export default footer;
