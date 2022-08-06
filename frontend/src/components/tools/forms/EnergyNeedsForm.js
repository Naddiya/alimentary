import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { activity, gender, sport } from "../../../../data/data";
import {
  updateNeeds,
  updateValues,
  clearValues,
} from "../../../redux/needsSlice";

const EnergyNeedsForm = () => {
  const values = useSelector((state) => state.needs.values);
  const {
    height,
    weight,
    age,
    activityLevel,
    sportLevel,
    sportTime,
    genderRatio,
  } = values;

  const needs = useSelector((state) => state.needs.needs);

  const dispatch = useDispatch();

  const activityRadios = activity.map((elem) => ({
    name: elem.level,
    value: elem.ratio,
  }));
  const genderRadios = gender.map((elem) => ({
    name: elem.type,
    value: elem.ratio,
  }));
  const sportRadios = sport.map((elem) => ({
    name: elem.level,
    value: elem.ratio,
  }));

  const handleClear = () => {
    dispatch(clearValues());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateValues({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNeeds());
  };

  return (
    <>
      <h2>Besoin énergétique</h2>
      <Box className="tools-energy" component="form" onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel>Taille</InputLabel>
          <OutlinedInput
            type="number"
            id="height"
            name="height"
            label="Taille"
            value={height}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end">cm</InputAdornment>}
            inputProps={{
              "aria-label": "Taille",
            }}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Poids</InputLabel>
          <OutlinedInput
            type="number"
            name="weight"
            label="Poids"
            value={weight}
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
            value={age}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel component="legend">Dépense énergétique de base</FormLabel>
          <RadioGroup row value={activityLevel} onChange={handleChange}>
            {activityRadios.map((elem) => (
              <FormControlLabel
                key={elem.name}
                control={<Radio />}
                labelPlacement="start"
                name="activityLevel"
                label={elem.name}
                value={elem.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl>
          <FormLabel component="legend">
            Dépense selon la pratique sportive
          </FormLabel>
          <RadioGroup row value={sportLevel} onChange={handleChange}>
            {sportRadios.map((elem) => (
              <FormControlLabel
                key={elem.name}
                control={<Radio />}
                name="sportLevel"
                label={elem.name}
                value={elem.value}
                labelPlacement="start"
              />
            ))}
          </RadioGroup>
        </FormControl>
        <FormControl>
          <InputLabel>Heures/Semaine</InputLabel>
          <OutlinedInput
            type="number"
            name="sportTime"
            label="Heures/Semaine"
            value={sportTime}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel component="legend">Dépense selon le genre</FormLabel>
          <RadioGroup row value={genderRatio} onChange={handleChange}>
            {genderRadios.map((elem) => (
              <FormControlLabel
                key={elem.name}
                control={<Radio />}
                name="genderRatio"
                labelPlacement="start"
                label={elem.name}
                value={elem.value}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box className="tools-energy-result">
          Calories par jour : {needs ? needs : "?"}
        </Box>
        <Box className="tools-energy-action">
          <Button
            className="tools-energy-action-calculate"
            type="submit"
            variant="outlined"
            color="success"
          >
            Calculer
          </Button>
          <Button
            className="tools-energy-action-clear"
            onClick={handleClear}
            variant="outlined"
            color="warning"
          >
            Initialiser
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default EnergyNeedsForm;
