import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const homeComponent = lazy(() => import('../components/home/homeComponent'));
const aboutComponent = lazy(() => import('../components/about/aboutComponent'));
const galleryComponent = lazy(() => import('../components/gallery/galleryComponent'));
const contactComponent = lazy(() => import ('../components/contact/contactComponent'));
const routes = (props) => {
  return (
    <Switch>
      <Route path="/home" component={ homeComponent } />
      <Route path="/about" component={ aboutComponent } />
      <Route path="/gallery" component={ galleryComponent } />
      <Route path="/contact" component={ contactComponent } />
      <Route path = "/" exact component = { homeComponent } />
    </Switch>
  )
}

export default routes;
