import React, { useState } from "react";
import { calculateMaxEntriesDeficit, calculateMaxActivityDeficit, getDifference } from "./calculations";
import ResultTable from './ResultTable';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Card,
  Paper,
  Slider,
  FormLabel,
  FormGroup,
  FormControlLabel,
  TextField,
  OutlinedInput,
  FromGroup

} from '@mui/material';

const Deficits = () => {

  const [clear, setClear] = useState(false);
  const [calories, setCalories] = useState('');
  const [maxEntriesDeficit, setMaxEntriesDeficit] = useState(0);
  const [maxActivityDeficit, setMaxActivityDeficit] = useState(0);
  const [combinedMaxDeficit, setCombinedMaxDeficit] = useState(0);
  const [entriesRange, setEntriesRange] = useState(0);
  const [activityRange, setActivityRange] = useState(0);

  const handleChange = (e) => {
    setCalories(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMaxEntriesDeficit(calculateMaxEntriesDeficit(calories));
    setMaxActivityDeficit(calculateMaxActivityDeficit(calories));
    setCombinedMaxDeficit(calories * 0.25);
    setActivityRange(calories * 0.25 * 0.5);
    setEntriesRange(calories * 0.25 * 0.5);
  };

  const handleRange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = Math.abs(e.target.value);
    const previousActivityRange = Math.abs(activityRange);
    const previousEntriesRange = Math.abs(entriesRange);
    const difference = getDifference(name, value, previousActivityRange, previousEntriesRange);
    const isValid = (activityRange + entriesRange) <= combinedMaxDeficit;

    if (name === 'activityCalories' && isValid) {
      if ((Math.abs(maxActivityDeficit) - previousActivityRange) < value) {
        setActivityRange(value);
        setEntriesRange(previousEntriesRange + difference);
      } else { return; }
    }
    if (name === 'entriesCalories' && isValid) {
      if ((Math.abs(maxEntriesDeficit) - previousEntriesRange) < value) {
        setEntriesRange(value);
        setActivityRange(previousActivityRange + difference);
      } else { return; }
    }
  };

  const handleClear = () => {
    setMaxEntriesDeficit(0);
    setMaxActivityDeficit(0);
    setCalories('');
    setClear(!clear);
  };

  return (
    <Box className="deficits"  sx={{ p: 2 }} >
      <h2>Calcul des déficits max</h2>
      <Card
        className="deficits-calculation"
        component="form"
        onSubmit={handleSubmit}
        sx={{ padding: '2rem', margin: 'auto', width: '50%' }}
      >
        <FormGroup sx={{ gap: '10px' }} >
          <FormControl onChange={handleChange}>
            <InputLabel>Consomation calorique actuelle</InputLabel>
            <OutlinedInput
              type="number"
              name="calories"
              label="Consomation calorique actuelle"
              value={calories}
            />
          </FormControl>
        </FormGroup>

        <Box className="call-to-action">
          <Button className="button-calculate" type="submit" variant="outlined" color="success">Calculer</Button>
          <Button className="button-clear" onClick={handleClear} variant="outlined" color="warning" >Initialiser</Button>
        </Box>

        <ResultTable entries={maxEntriesDeficit} activity={maxActivityDeficit} />
      </Card>



      <h2>Combiner les déficits</h2>
      <Card className="deficits-range" component="form" sx={{ padding: '2rem', margin: 'auto', width: '50%' }}>
        <FormGroup>

          <FormLabel>Le déficit maximum correspond à 25% de la consommation courante, soit = {combinedMaxDeficit} calories</FormLabel>

          <InputLabel >Entries {entriesRange}/{maxEntriesDeficit}</InputLabel>
          <FormControl>
            <Slider
              name="entriesCalories"
              valueLabelDisplay="auto"
              min={0}
              max={maxEntriesDeficit}
              step={1}
              value={entriesRange}
              onChange={handleRange}
            />
          </FormControl>

          <InputLabel>Activity {activityRange}/ {maxActivityDeficit}</InputLabel>
          <FormControl >
            <Slider
              aria-label="Activity"
              name="activityCalories"
              min={0}
              max={maxActivityDeficit}
              step={1}
              value={activityRange}
              onChange={handleRange}
            />
          </FormControl>
        </FormGroup>

      </Card>

    </Box>
  );
};

export default Deficits;