import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import BodyMassIndex from './Components/BodyMassIndex';
import Deficits from './Components/Decifits';
import EnergyNeeds from './Components/EnergyNeeds';
import DashBoard from './Components/DashBoard.js';
import CssBaseline from '@mui/material/CssBaseline';

import './styles/styles.scss';

const loader = document.querySelector('.loader');
const showLoader = () => loader.classList.remove('loader--hide');
const hideLoader = () => loader.classList.add('loader--hide');

const App = ({ hideLoader }) => {
  useEffect(hideLoader, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bmi' component={BodyMassIndex} />
        <Route path='/deficits' component={Deficits} />
        <Route path='/energy' component={EnergyNeeds} />
        <Route path='/dashboard' component={DashBoard} />
      </Switch>
      <Footer />
    </Router>
  );
};

setTimeout(() =>
  ReactDOM.render(
    <React.StrictMode>
      <CssBaseline />
      <App
        hideLoader={hideLoader}
        showLoader={showLoader} />
    </React.StrictMode>,
    document.getElementById('root')
  )
  , 1000);
