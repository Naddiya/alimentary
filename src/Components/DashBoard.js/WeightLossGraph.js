import React from 'react';
import { Line } from 'react-chartjs-2';
import '../../styles/weightlossgraph.scss';
import { Box , Card} from '@mui/material'
const loss = [];
for (let i = 0; i < 8; i++) {
  loss.push(i);
}

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12', 'Q13'],
  datasets: [
    {
      label: "maximum",
      data: [...loss],
      backgroundColor: 'red',
    },
    {
      label: "effectif",
      data: ['0.3', '0.4', '0.8', '0.8', '0.9', '1.1', '.7', '0.8', '0.9', '0.8'],
      backgroundColor: 'green',
    },
    {
      label: "minimum",
      data: ['0.1', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '0.8'],
      backgroundColor: 'blue',
    }
  ]
};

const options = {
  maintainAspectRatio: false,
};

const WeightLossGraph = () => {
  return (
    <Box className="monitoring" sx={{ p: 2 }}>
      <Card className="card" sx={{p: 2}}>
        <Line data={data} />
      </Card>

    </Box>
  );

};

export default WeightLossGraph;