import React from "react";
import BodyMassIndex from '../BodyMassIndex';
import EnergyRequirement from "../EnergyRequirement";
import DeficitsMax from "../DecifitsMax";
import '../../styles/bodymassindex.scss';

function Home() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BodyMassIndex />
      <EnergyRequirement />
      <DeficitsMax />
    </div>
  );
}

export default Home;