import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import BodyMassIndexPage from "./pages/BodyMassIndexPage";
import LossPage from "./pages/LossPage";
import EnergyNeedsPage from "./pages/EnergyNeedsPage";
import DashBoardPage from "./pages/DashBoardPage";
import AboutPage from "./pages/AboutPage";
import CaloriesCounterPage from "./pages/CaloriesCounterPage";
import Sources from "./pages/Sources";
import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import FourOFour from "./pages/FourOFour";
import Legals from "./pages/Legals";

import "./styles/styles.scss";
import "./styles/app.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="bmi" element={<BodyMassIndexPage />} />
          <Route path="loss" element={<LossPage />} />
          <Route path="energy-needs" element={<EnergyNeedsPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="calories-counter" element={<CaloriesCounterPage />} />
          <Route path="sources" element={<Sources />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="user-info" element={<UserInfo />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="legals" element={<Legals />}></Route>

          <Route path="*" element={<FourOFour />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
