import React from 'react';
import Routes from './routes/routes';
import HeaderComponent from './components/header/headerComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <Routes></Routes>
    </div>
  );
}

export default App;
