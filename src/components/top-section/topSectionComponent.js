import React, { useEffect } from "react";
import './topSectionComponent.css';
import slide1 from "../../img/bg-img/1.jpg";
import slide2 from "../../img/bg-img/2.jpg";
import * as userService from '../../services/users/userService';
import { Container, Col, Row, Carousel } from 'react-bootstrap';

const TopSection = (props) => {
  useEffect(() => {
    let userBody = {
      name: 'Yash Wadhwa',
      email: 'yashwadhwa@photo.com',
      contact: '9811188814',
      address: '932 Rani bagh, Delhi',
      pincode: 110034,
      password: window.btoa('yashwadhwa'),
      role: 'admin'
    }
    userService.default.signup(userBody)
    .then(res => {
      console.log(res)
    })
  }, [])
  return (
    <section className="welcome-area">
      <Carousel pause={false} interval={2000}>
        <Carousel.Item interval={2000}>
          <div
            className="single-welcome-slide bg-img bg-overlay"
            style={{ backgroundImage: `url(${slide2})` }}
          >
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col md={12} lg={8} xl={6}>
                  <div className="welcome-text">
                    <h2 className="animate__animated animate__bounceInUp" >
                      Hello <br />
                      I'm Alime
                    </h2>
                    <p className="animate__animated animate__bounceInUp" >
                      I photograph very instinctively. I see how it is taken like
                      that. I do not follow certain styles, philosophies or teachers.
                    </p>
                    <div
                      className="hero-btn-group animate__animated animate__bounceInUp"
                      
                    >
                      <a href="#" className="alime-btn mb-3 mb-sm-0 mr-4">
                        Get a Quote
                      </a>
                      <a
                        className="hero-mail-contact"
                        href="mailto:hello.alime@gmail.com"
                      >
                        hello.alime@gmail.com
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <div
            className="single-welcome-slide bg-img bg-overlay"
            style={{ backgroundImage: `url(${slide1})` }}
          >
            <Container className="h-100">
              <Row className="h-100 align-items-center">
                <Col md={12} lg={8} xl={6}>
                  <div className="welcome-text animate__animated animate__bounceInDown">
                    <h2 data-animation="bounceInDown" data-delay="900ms">
                      Hello <br />
                      I'm Jackson
                    </h2>
                    <p data-animation="bounceInDown" data-delay="500ms">
                      I photograph very instinctively. I see how it is taken like
                      that. I do not follow certain styles, philosophies or
                      teachers.
                    </p>
                    <div
                      className="hero-btn-group"
                      data-animation="bounceInDown"
                      data-delay="100ms"
                    >
                      <a href="#" className="alime-btn mb-3 mb-sm-0 mr-4">
                        Get a Quote
                      </a>
                      <a
                        className="hero-mail-contact"
                        href="mailto:hello.alime@gmail.com"
                      >
                        hello.alime@gmail.com
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>    
    </section>
  )
}

export default TopSection;
