import React from 'react';
import WeigthForm from './WeightForm';
import WeightLossGraph from './WeightLossGraph';

function DashBoard() {

  return (
    <div className="dashboard">
      <WeigthForm />
      <WeightLossGraph />
    </div>
  );
}

export default DashBoard;