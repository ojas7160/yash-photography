import React from "react";
import { Link } from "react-router-dom";
import img from "../../img/bg-img/38.jpg";

const contact = (props) => {
  return (
    <div>
      <section
        className="breadcrumb-area bg-img bg-overlay jarallax"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2 className="page-title">Contact</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <Link to="/">
                        <i className="icon_house_alt"></i> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-area section-padding-80-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <h2 className="contact-title mb-30">
                Let’s Work <br />
                Together
              </h2>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info mb-30">
                <p>Email</p>
                <a href="mailto:info.deercreative@gmail.com">
                  info.deercreative@gmail.com
                </a>
              </div>
              <div className="contact-info mb-30">
                <p>Call Us</p>
                <a href="#">+6511.188.888</a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info mb-30">
                <p>Visit Us</p>
                <a href="#">60-49 Road 11378 New York</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area section-padding-0-80">
        <div className="container">
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.130631791997!2d77.12764395002807!3d28.685738688336624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzA4LjYiTiA3N8KwMDcnNDcuNCJF!5e0!3m2!1sen!2sin!4v1597579690400!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
