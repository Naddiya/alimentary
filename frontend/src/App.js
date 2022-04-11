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
import DashBoard from './pages/DashBoard';
import About from './pages/About';

import './styles/styles.scss';
import './styles/app.scss';


const App = () => {

  return (
    <Router >
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path="/bmi" element={<BodyMassIndex />} />
          <Route path="/deficits" element={<Deficits />} />
          <Route path='/energy-needs' element={<EnergyNeeds />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/about' element={<About />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;