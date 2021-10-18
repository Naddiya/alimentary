import React from "react";
import BodyMassIndex from './BodyMassIndex';
import EnergyNeeds from "./EnergyRequirement";
import DeficitsMax from "./DeficitsMax";
import '../styles/bodymassindex.scss';

function Home() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BodyMassIndex />
      <EnergyNeeds />
      <DeficitsMax />
    </div>
  );
}

export default Home;