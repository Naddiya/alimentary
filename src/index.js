import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import BodyMassIndex from './Components/BodyMassIndex';
import EnergyRequirement from './Components/EnergyRequirement';
import Deficits from './Components/Decifits';
import DashBoard from './Components/DashBoard.js';


const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/bmi' component={BodyMassIndex} />
        <Route path='/deficits' component={Deficits} />
        <Route path='/energy' component={EnergyRequirement} />
        <Route path='/dashboard' component={DashBoard} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
