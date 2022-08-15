import React from "react";
import { useDispatch, useSelector } from "react-redux";
import
  {
    Box,
    Button,
    FormControl,
    InputLabel,
    FormGroup,
    OutlinedInput,
    Slider,
    FormLabel,
  } from "@mui/material";
import ResultTable from "./ResultTable";
import
  {
    updateCalories,
    clearLossForm,
    updateLoss,
    updateEntriesRange,
    updateActivityRange,
  } from "../../../redux/lossSlice.js";
import { calculateDifference } from "../../../utils/lossUtils";

const LossForm = () =>
{
  const dispatch = useDispatch();

  const { calories, maxEntriesLoss, maxActivityLoss, maxTotalLoss } =
    useSelector((state) => state.loss);

  const ranges = useSelector((state) => state.loss.ranges);
  const { activityRange, entriesRange } = ranges;

  const handleChange = (e) =>
  {
    dispatch(updateCalories(e.target.value));
  };

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    dispatch(updateLoss());
  };

  const handleRange = (e) =>
  {
    const { name, value } = e.target;
    const previousActivityRange = activityRange;
    const previousEntriesRange = entriesRange;
    const difference = calculateDifference(
      name,
      value,
      previousActivityRange,
      previousEntriesRange
    );
    const isValid = activityRange + entriesRange <= maxTotalLoss;
    if (name === "activityRange" && isValid)
    {
      if (maxActivityLoss - previousActivityRange < value)
      {
        dispatch(updateActivityRange(value));
        dispatch(updateEntriesRange(previousEntriesRange + difference));
      }
    }
    if (name === "entriesRange" && isValid)
    {
      if (maxEntriesLoss - previousEntriesRange < value)
      {
        dispatch(updateEntriesRange(value));
        dispatch(updateActivityRange(previousActivityRange + difference));
      }
    }
  };

  const handleClear = () =>
  {
    dispatch(clearLossForm());
  };

  return (
    <Box className="tools">
      <h2>Calcul des déficits max</h2>
      <Box className="tools-loss" component="form" onSubmit={ handleSubmit }>
        <FormGroup>
          <FormControl onChange={ handleChange } onSubmit={ handleSubmit }>
            <InputLabel>Besoin calorique par jour</InputLabel>
            <OutlinedInput
              type="number"
              name="calories"
              label="Consomation calorique actuelle"
              value={ calories }
            />
          </FormControl>
        </FormGroup>
        <Box className="tools-loss-action">
          <Button
            className="tools-loss-action-calculate"
            type="submit"
            variant="outlined"
            color="success"
          >
            Calculer
          </Button>
          <Button
            className="tools-loss-action-clear"
            onClick={ handleClear }
            variant="outlined"
            color="warning"
          >
            Initialiser
          </Button>
          <ResultTable entries={ maxEntriesLoss } activity={ maxActivityLoss } />
        </Box>
      </Box>
      <h2>Combiner les déficits</h2>
      <Box className="tools-loss" component="form">
        <FormGroup>
          <FormLabel>
            Le déficit maximum correspond à 25% de la consommation courante,
            soit = { maxTotalLoss } calories
          </FormLabel>
          <InputLabel>
            Entries { ranges.entriesRange }/{ maxEntriesLoss }
          </InputLabel>
          <FormControl>
            <Slider
              name="entriesRange"
              valueLabelDisplay="auto"
              min={ 0 }
              max={ maxEntriesLoss }
              step={ 1 }
              value={ entriesRange }
              onChange={ handleRange }
            />
          </FormControl>
          <InputLabel>
            Activity { ranges.activityRange }/ { maxActivityLoss }
          </InputLabel>
          <FormControl>
            <Slider
              aria-label="Activity"
              name="activityRange"
              min={ 0 }
              max={ maxActivityLoss }
              step={ 1 }
              value={ activityRange }
              onChange={ handleRange }
            />
          </FormControl>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default LossForm;
