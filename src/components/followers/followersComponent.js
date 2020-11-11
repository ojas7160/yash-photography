import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import img11 from '../../img/bg-img/11.jpg'
import img12 from '../../img/bg-img/12.jpg'
import img13 from '../../img/bg-img/13.jpg'
import img14 from '../../img/bg-img/14.jpg'
import img15 from '../../img/bg-img/15.jpg'
import img16 from '../../img/bg-img/16.jpg'

const followers = (props) => (
  <section className={props.theme + " follow-area clearfix"}>
    <Container>
      <Row>
        <Col>
          <div className="section-heading text-center">
            <h2>Follow Instagram</h2>
            <p>@Alime_photographer</p>
          </div>
        </Col>
      </Row>
    </Container>

    <div className="instragram-feed-area d-flex">
      <div className="single-instagram-item">
        <img src={img11} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
      <div className="single-instagram-item">
        <img src={img12} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
      <div className="single-instagram-item">
        <img src={img13} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
      <div className="single-instagram-item">
        <img src={img14} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
      <div className="single-instagram-item">
        <img src={img15} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
      <div className="single-instagram-item">
        <img src={img16} alt="" />
        <div className="instagram-hover-content text-center d-flex align-items-center justify-content-center">
          <a href="#">
            <i className="ti-instagram" aria-hidden="true"></i>
            <span>Alime_photographer</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default followers;
