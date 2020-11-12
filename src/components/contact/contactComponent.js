import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/bg-img/38.jpg";
import { useSelector } from 'react-redux';
import * as userService from '../../services/users/userService'; 

const Contact = (props) => {
  const [profile, setProfile] = useState({})
  const user = useSelector(state => state.loginReducer.user);
  const theme = useSelector(state => state.themeReducer.theme)

  useEffect(() => {
    if(user && Object.keys(user).length) {
      userService.default.getProfile(user._id)
      .then(res => {
        console.log(res)
        setProfile(res.data.user)
      })
    }
  }, [])

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

      <div className={theme + " contact-area section-padding-80-50"}>
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
                <a href={'mailto:' + profile.email}>
                  {profile.email}
                </a>
              </div>
              <div className="contact-info mb-30">
                <p>Call Us</p>
                <a href="#">{profile.contact}</a>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="contact-info mb-30">
                <p>Visit Us</p>
                <a href="#">{profile.address} {profile.pincode}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={theme + " map-area section-padding-0-80"}>
        <div className="container">
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.130631791997!2d77.12764395002807!3d28.685738688336624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzA4LjYiTiA3N8KwMDcnNDcuNCJF!5e0!3m2!1sen!2sin!4v1597579690400!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
