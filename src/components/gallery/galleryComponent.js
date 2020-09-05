import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import ReactCompareImage from 'react-compare-image';
import ImageSlider from "react-image-comparison-slider";

import './galleryComponent.css';
import img3 from '../../img/bg-img/3.jpg'
import img4 from '../../img/bg-img/4.jpg';
import img5 from '../../img/bg-img/5.jpg';
import img6 from '../../img/bg-img/6.jpg'
import img7 from '../../img/bg-img/7.jpg'
import img9 from '../../img/bg-img/9.jpg'
import img10 from '../../img/bg-img/10.jpg'
import img8 from '../../img/bg-img/8.jpg'
import img36 from '../../img/bg-img/36.jpg'
import img37 from '../../img/bg-img/37.jpg'
import img38 from '../../img/bg-img/38.jpg';

const Gallery = (props) => {
  const currentPath = props.location.pathname
  
  useEffect(() => {
    var imageContainer = document.querySelector("#top-image");
    console.log(imageContainer)
    var image = imageContainer.querySelector("img");
    var range = document.querySelector("#range-input");
  
    range.oninput = function() {
      imageContainer.style.width = this.value + "%";
    }
  }, [])

  return (
    <div>
      {
        currentPath == '/gallery' ? 
        <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: `url(${img38})`}}>
          <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <div className="breadcrumb-content text-center">
                      <h2 className="page-title">Gallery</h2>
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item"><Link to="/"><i className="icon_house_alt"></i> Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                        </ol>
                      </nav>
                    </div>
                </div>
            </div>
          </div>
        </section> : null
      }
      
      <div className="alime-portfolio-area section-padding-80 clearfix">
        <Container>
          <Row>
            <Col>
              <div className="alime-projects-menu">
                <div className="portfolio-menu text-center">
                  <button className="btn active" data-filter="*">All</button>
                  <button className="btn" data-filter=".human">Human</button>
                  <button className="btn" data-filter=".nature">Nature</button>
                  <button className="btn" data-filter=".country">Country</button>
                  <button className="btn" data-filter=".video">Video</button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="alime-portfolio">
            <Col md={3}>
              <div className=" mb-30 animate__animated animate__slideInUp">
                {/* <img src={img3} alt="" /> */}
                {/* <ReactCompareImage hover="true" leftImage={img3} rightImage={img7} /> */}
                <div className="image-slider">
                  <div id="top-image">
                    <img id="after" src={img10} alt="After" style={{height: '100%', objectFit: 'cover'}}/>
                  </div>
                  <img src={img3} alt="Before" />
                  <input id="range-input" type="range" />
                </div>
                {/* <div className="hover-content">
                  <a href={img3} className="portfolio-img">+</a>
                </div> */}
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img7} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/7.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img36} alt="" />
                <div className="hover-content">
                    <a href="img/bg-img/36.jpg" className="portfolio-img">+</a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img4} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/4.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img8} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/8.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img37} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/37.jpg" className="portfolio-img">+</a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img5} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/5.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img10} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/10.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img5} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/5.jpg" className="portfolio-img">+</a>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img6} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/6.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img9} alt="" />
                <div className="hover-content">
                  <a href="img/bg-img/9.jpg" className="portfolio-img">+</a>
                </div>
              </div>
              <div className="single-portfolio-content mb-30 animate__animated animate__slideInUp">
                <img src={img36} alt="" />
                <div className="hover-content">
                    <a href="img/bg-img/36.jpg" className="portfolio-img">+</a>
                </div>
              </div>
            </Col>

          </Row>

          <Row>
            <Col className="text-center wow fadeInUp" data-wow-delay="700ms">
              <a href="#" className="alime-btn btn-2 mt-15">View More</a>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}
  

export default withRouter(Gallery);