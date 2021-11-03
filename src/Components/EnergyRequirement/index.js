import React, { useState, useRef } from 'react';
import { activity, gender, sport } from '../../../data/data';
import { calculateEnergyRequirement } from './calculations';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Card,
  Paper,
  OutlinedInput,
  InputAdornment,
  FormLabel,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';

const EnergyRequirement = () => {
  const [needs, setNeeds] = useState(0);
  const [clear, setClear] = useState(false);
  const [values, setValues] = useState({
    height: '',
    weight: '',
    age: '',
    activityLevel: '',
    sportLevel: '',
    sportTime: '',
    genderLevel: ''
  });

  const activityRadios = activity.map(elem => ({
    name: elem.level,
    value: elem.ratio,
  }));
  const genderRadios = gender.map(elem => ({
    name: elem.type,
    value: elem.ratio,
  }));
  const sportRadios = sport.map(elem => ({
    name: elem.level,
    value: elem.ratio,
  }));

  const formRef = useRef(null);

  const handleClear = () => {
    setNeeds(0);
    formRef.current.reset();
    setValues({
      height: '',
      weight: '',
      age: '',
      activityLevel: '',
      sportLevel: '',
      sportTime: '',
      genderLevel: ''
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = calculateEnergyRequirement(values);
    if (!!result) {
      setNeeds(result);
    }
  };

  return (
    <Box className="energy">
      <h2>Calcul des dépenses energétiques</h2>
      <Card sx={{ padding: '2rem', margin: 'auto', width: '50%' }} component="form" onSubmit={handleSubmit} ref={formRef}>
        <FormGroup id="energy-needs" sx={{ gap: '10px' }}>
          <FormControl>
            <InputLabel>Taille</InputLabel>
            <OutlinedInput
              type="number"
              name="height"
              label="Taille"
              endAdornment={<InputAdornment position="end">cm</InputAdornment>}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Poids</InputLabel>
            <OutlinedInput
              type="number"
              name="weight"
              label="Poids"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <InputLabel>Age</InputLabel>
            <OutlinedInput
              type="number"
              name="age"
              label="Age"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Dépenses énergétique de base</FormLabel>
            <RadioGroup row value={values.activityLevel} onChange={handleChange}>
              {activityRadios.map(elem =>
                <FormControlLabel
                  key={elem.name}
                  control={<Radio />}
                  labelPlacement="start"
                  name="activityLevel"
                  label={elem.name}
                  value={elem.value}
                />
              )}
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel component="legend">Dépenses selon la pratique sportive</FormLabel>
            <RadioGroup row value={values.sportLevel} onChange={handleChange} >
              {sportRadios.map(elem =>
                <FormControlLabel key={elem.name}
                  control={<Radio />}
                  name="sportLevel"
                  label={elem.name}
                  value={elem.value}
                  labelPlacement="start"
                />
              )}
            </RadioGroup>
          </FormControl>
          <FormControl>
            <InputLabel>Heures/Semaine</InputLabel>
            <OutlinedInput
              type="number"
              name="sportTime"
              label="Heures/Semaine "
              onChange={handleChange}
            />
          </FormControl>
          <FormControl >
            <FormLabel component="legend">Dépenses selon le genre</FormLabel>
            <RadioGroup row value={values.genderLevel} onChange={handleChange}>
              {genderRadios.map(elem =>
                <FormControlLabel
                  key={elem.name}
                  control={<Radio />}
                  name="genderLevel"
                  labelPlacement="start"
                  label={elem.name}
                  value={elem.value}
                  defaultValue='female'
                />
              )}
            </RadioGroup>
          </FormControl>

          <Paper className="calculation-result">Resultat : {needs}</Paper>
          <Box className="call-to-action">
            <Button className="button-calculate" type="submit" variant="outlined" color="success">Calculer</Button>
            <Button className="button-clear" onClick={handleClear} variant="outlined" color="warning">Initialiser</Button>
          </Box>
        </FormGroup>
      </Card>
    </Box >
  );
};


export default EnergyRequirement;