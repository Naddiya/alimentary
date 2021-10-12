import React from "react";
import BMI from './BMI';
import EnergyNeeds from "./EnergyRequirement";
import Strategy from "./Strategy";
import '../styles/Balance.scss';

function Balance() {
  return (
    <div>
      <h1> BALANCE </h1>
      <BMI />
      <EnergyNeeds />
      <Strategy />
    </div>
  );
}

export default Balance;