import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BodyMassIndexPage from "./pages/BodyMassIndexPage";
import DeficitsPage from "./pages/DeficitsPage";
import EnergyNeedsPage from "./pages/EnergyNeedsPage";
import DashBoardPage from "./pages/DashBoardPage";
import AboutPage from "./pages/AboutPage";
import CaloriesCounterPage from "./pages/CaloriesCounterPage";

import "./styles/styles.scss";
import "./styles/app.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/bmi" element={<BodyMassIndexPage />} />
          <Route path="/deficits" element={<DeficitsPage />} />
          <Route path="/energy-needs" element={<EnergyNeedsPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/calories-counter" element={<CaloriesCounterPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
