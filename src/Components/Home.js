import React from "react";
import BodyMassIndex from './BodyMassIndex';
import EnergyNeeds from "./EnergyRequirement";
import Strategy from "./Strategy";
import '../styles/bodymassindex.scss';

function Home() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BodyMassIndex />
      <EnergyNeeds />
      <Strategy />
    </div>
  );
}

export default Home;