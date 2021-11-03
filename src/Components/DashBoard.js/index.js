import React from 'react';
import LossForm from './LossForm';
import WeightLossGraph from './WeightLossGraph';

function DashBoard() {

  return (
    <div className="dashboard">
      <LossForm />
      <WeightLossGraph />
    </div>
  );
}

export default DashBoard;