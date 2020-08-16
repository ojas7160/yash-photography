import React from 'react';
import img38 from '../../img/bg-img/38.jpg'
import img17 from '../../img/bg-img/17.jpg'
import img19 from '../../img/bg-img/19.jpg'
import img20 from '../../img/bg-img/20.jpg'
import img21 from '../../img/bg-img/21.jpg'
import img22 from '../../img/bg-img/22.jpg'
import { Link } from 'react-router-dom';

const about = (props) => (
  <div>

    <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{backgroundImage: `url(${img38})`}}>
    <div className="container h-100">
        <div className="row h-100 align-items-center">
            <div className="col-12">
                <div className="breadcrumb-content text-center">
                    <h2 className="page-title">About Us</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/"><i className="icon_house_alt"></i> Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
  </section>

    <div className="about-us-area section-padding-80-0 clearfix">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-12 col-lg-6">
                <div className="about-us-content mb-80">
                    <h3 className="wow fadeInUp" data-wow-delay="100ms">We Live For Passion</h3>
                    <div className="line wow fadeInUp" data-wow-delay="200ms"></div>
                    <p className="wow fadeInUp" data-wow-delay="300ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                    <p className="wow fadeInUp" data-wow-delay="400ms">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                    <a className="btn alime-btn btn-2 mt-30 wow fadeInUp" data-wow-delay="500ms" href="#">Contact Us</a>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="about-video-area mb-80 wow fadeInUp" data-wow-delay="100ms">
                    <img src={img17} alt=""/>
                    <div className="video-icon">
                        <a href="https://www.youtube.com/watch?v=sSakBz_eYzQ" className="video-play-btn"><i className="arrow_triangle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>

    <section className="why-choose-us-area bg-gray section-padding-80-0 clearfix">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                    <h2>Why Choose Us</h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 col-lg-4">
                <div className="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="100ms">
                    <div className="chosse-us-icon">
                        <i className="fa fa-film" aria-hidden="true"></i>
                    </div>
                    <h4>High Quality Images</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">
                <div className="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="300ms">
                    <div className="chosse-us-icon">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                    </div>
                    <h4>Abundant Experience</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">
                <div className="why-choose-us-content text-center mb-80 wow fadeInUp" data-wow-delay="500ms">
                    <div className="chosse-us-icon">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                    </div>
                    <h4>Modern Equipments</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                </div>
            </div>
        </div>
    </div>
  </section>

    <section className="our-team-area section-padding-80-50">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                    <h2>Our Team</h2>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 col-xl-3">
                <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="100ms">
                    <div className="member-thumb">
                        <img src={img19} alt=""/>
                    </div>
                    <h5>Andrew Dean</h5>
                    <span>Photographer</span>
                    <div className="member-social-info">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xl-3">
                <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="300ms">
                    <div className="member-thumb">
                        <img src={img20} alt=""/>
                    </div>
                    <h5>Tommy Kim</h5>
                    <span>Photographer</span>
                    <div className="member-social-info">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xl-3">
                <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="500ms">
                    <div className="member-thumb">
                        <img src={img21} alt=""/>
                    </div>
                    <h5>Max McCormick</h5>
                    <span>Photographer</span>
                    <div className="member-social-info">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-xl-3">
                <div className="team-content-area text-center mb-30 wow fadeInUp" data-wow-delay="700ms">
                    <div className="member-thumb">
                        <img src={img22} alt=""/>
                    </div>
                    <h5>Robert Ward</h5>
                    <span>Photographer</span>
                    <div className="member-social-info">
                        <a href="#"><i className="ti-facebook"></i></a>
                        <a href="#"><i className="ti-twitter-alt"></i></a>
                        <a href="#"><i className="ti-linkedin"></i></a>
                        <a href="#"><i className="ti-pinterest"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  </div>
)

export default about;