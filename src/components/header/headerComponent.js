import React from 'react';
import './headerComponent.css';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import logo from '../../img/core-img/logo.png'

const header = (props) => {
  return (
    <div className="header-area">
      <div className="main-header-area">
        <div className="classy-nav-container breakpoint-off">
          <Container>
            <nav className="classy-navbar justify-content-between" id="alimeNav">

              <Link className="nav-brand" exact="true" to="/"><img src={logo} alt="" /></Link>

              <div className="classy-navbar-toggler">
                <span className="navbarToggler"></span>
              </div>

              <div className="classy-menu">
                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>
                <div className="classynav">
                  <ul id="nav">
                    <li className={props.location.pathname == '/home' ? 'active' : ''}><Link to="/home">Home</Link></li>
                    
                    <li className={props.location.pathname == '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
                    <li className={props.location.pathname == '/gallery' ? 'active' : ''}><Link to="/gallery">Gallery</Link></li>
                    <li className={props.location.pathname == '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
                    <li className={props.location.pathname == '/login' ? 'active' : ''}><Link to="/login">Login</Link></li>
                    <li className={props.location.pathname == '/signup' ? 'active' : ''}><Link to="/signup">Signup</Link></li>
                  </ul>

                  <div className="search-icon" data-toggle="modal" data-target="#searchModal"><i className="ti-search"></i></div>
                </div>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default withRouter(header);