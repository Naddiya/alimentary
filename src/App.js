import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import BodyMassIndex from './pages/BodyMassIndex';
import Deficits from './pages/Deficits';
import EnergyNeeds from './pages/EnergyNeeds';

import './styles/styles.scss';
import './styles/app.scss';


const App = () => {

  return (
    <Router >
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path='' element={<Home />} />
          <Route path="/bmi" element={<BodyMassIndex />} />
          <Route path="/deficits" element={<Deficits />} />
          <Route path='/energy-needs' element={<EnergyNeeds />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;