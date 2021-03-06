import React, { useEffect, useState } from 'react';
import './headerComponent.css';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from '../../img/core-img/logo.png'
import { connect } from 'react-redux'
import * as userService from '../../services/users/userService';

const Header = (props) => {
  const [user, setUser] = useState(props.user || {})
  // const dispatch = useDispatch()

  const logout = () => {
    // useDispatch({type: 'LOGOUT', token: null})
    props.logout()
  }

  const [isUser, setUserValue] = useState(null);

  useEffect(() => {
    if(!user || !Object.keys(user).length) {
      setUserValue(null)
    } else {
      setUserValue(true)
    }
  }, [user])

  const changeClassName = () => {
    if(user && Object.keys(user).length && user._id) {
      user.theme = (user.theme && user.theme === 'dark') ? 'light' : 'dark'
      userService.default.updateUser(user)
      .then(res => {
        console.log(res)
        if(res.data.success) {
          props.updateUser(user)
          props.onChangeTheme(user.theme)
        }
      })
    } else {
      let userTheme = '';
      userTheme = localStorage.getItem('theme')
      userTheme = (!userTheme || userTheme === 'light') ?  'dark' : 'light' 
      setUser({...user, theme: userTheme})
      localStorage.setItem('theme', userTheme)
      props.onChangeTheme(userTheme)
    }
  }
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
                    <li className={props.location.pathname === '/home' ? 'active' : ''}><Link to="/home">Home</Link></li>
                    
                    <li className={props.location.pathname === '/about' ? 'active' : ''}><Link to="/about">About</Link></li>
                    <li className={props.location.pathname === '/gallery' ? 'active' : ''}><Link to={{ pathname: "/gallery", theme: props.theme }}>Gallery</Link></li>
                    <li className={props.location.pathname === '/contact' ? 'active' : ''}><Link to="/contact">Contact</Link></li>
                    <li className={props.location.pathname === '/signup' ? 'active' : ''}><Link to="/signup">Signup</Link></li>
                    <li ><button className="btn btn-primary" onClick={changeClassName}>Toggle</button></li>
                    <li><Link to="/profile">Profile</Link></li>
                    {isUser ? <li onClick={logout}><Link to="">Logout</Link></li> : <li className={props.location.pathname === '/login' ? 'active' : ''}><Link to="/login">Login</Link></li>}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTheme: (theme) => dispatch({ type: 'THEME_CHANGE', theme: theme}),
    updateUser: (user) => dispatch({type: 'UPDATE_USER', user: user}),
    logout: () => dispatch({type: 'LOGOUT'})
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user,
    theme: state.themeReducer.theme
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));