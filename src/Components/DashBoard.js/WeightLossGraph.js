import React from 'react';
import { Line } from 'react-chartjs-2';
import '../../styles/weightlossgraph.scss'

const loss = [];
for (let i = 0; i < 8; i++) {
  loss.push(i);
}
console.log(loss);

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13'],
  datasets: [
    {
      label: "amaigrissmeent maximum",
      data: [...loss],
      backgroundColor: 'red',
    },
    {
      label: "amaigrissement effectif",
      data: ['0.3', '0.4', '0.8', '0.8', '0.9', '1.1', '.7', '0.8', '0.9', '0.8'],
      backgroundColor: 'green',
    },
    {
      label: "amaigrissement minimum",
      data: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '0.8'],
      backgroundColor: 'blue',
    }
  ]
};

const options = {
  maintainAspectRatio: false,
};

function WeightLossGraph() {
  return (
    <div className="monitoring">
      <div className="card">
        <Line data={data} />
      </div>

    </div>
  );

}

export default WeightLossGraph;