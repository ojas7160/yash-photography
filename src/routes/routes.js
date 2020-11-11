import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

const homeComponent = lazy(() => import('../components/home/homeComponent'));
const aboutComponent = lazy(() => import('../components/about/aboutComponent'));
const galleryComponent = lazy(() => import('../components/gallery/galleryComponent'));
const contactComponent = lazy(() => import ('../components/contact/contactComponent'));
const signupComponent = lazy(() => import ('../components/signup/signupComponent'));
const loginComponent = lazy(() => import('../components/login/loginComponent'));

const routes = (props) => {
  return (
    <Switch>
      <Route path="/home" component={ homeComponent } />
      <Route path="/about" component={ aboutComponent } />
      <Route path="/gallery" component={ galleryComponent } />
      <Route path="/contact" component={ contactComponent } />
      <Route path="/signup" component={ signupComponent } />
      <Route path="/login" component={loginComponent} />
      <Route path = "/" exact component = { homeComponent } />
    </Switch>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     theme: state.themeReducer.theme
//   }
// }

export default routes;
