import React, { useState } from 'react';
import { calculateBmi } from './calculations';
import { Box, Button, FormControl, InputLabel, Card, Paper, OutlinedInput, InputAdornment } from '@mui/material';
import '../../styles/tools.scss'

function BodyMassIndex() {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [clear, setClear] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateBmi(weight, height);
    setBmi(result);
  };
  const handleClear = (e) => {
    e.preventDefault();
    setClear(!clear);
    setWeight('');
    setHeight('');
    setBmi(0);
  };

  return (
    <Box className="tools">
      <h2>Calculer l'indice de masse corporelle</h2>
      <Card className="tools-bmi" component="form" onSubmit={handleSubmit}>
        <FormControl variant="outlined">
          <InputLabel>Taille</InputLabel>
          <OutlinedInput
            type="number"
            id="height"
            name="height"
            value={height}
            label="Taille"
            onChange={e => setHeight(e.target.value)}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            inputProps={{
              'aria-label': 'Taille',
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel aria-labelledby="Poids">Poids</InputLabel>
          <OutlinedInput
            type="number"
            id="weight"
            name="weight"
            value={weight}
            label="Poids"
            onChange={e => setWeight(e.target.value)}
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            inputProps={{
              'aria-label': 'Poids',
            }}
          />
        </FormControl>
        <Paper className="tools-bmi-result">Resultat {bmi}</Paper>
        <Box className="tools-bmi-action">
          <Button id="tools-bmi-action-calculate" variant="outlined" color="success" type="submit">Calcul du BMI</Button>
          <Button id="tools-bmi-action-clear" variant="outlined" color="warning" className="button-clear" onClick={handleClear}>Initialiser</Button>
        </Box>
      </Card>
    </Box>
  );
};

export default BodyMassIndex;