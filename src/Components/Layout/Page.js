import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from "../Home";
import DashBoard from "../DashBoard.js/index.js";
import Deficits from "../Decifits";
import BodyMassIndex from "../BodyMassIndex";
import EnergyNeeds from "../EnergyNeeds";

const Page = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/bmi" element={<BodyMassIndex />} />
                <Route path="deficits" element={<Deficits />} />
                <Route path="/energy" element={<EnergyNeeds />} />
                <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        </>
    );
};

export default Page;