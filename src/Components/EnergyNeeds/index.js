import React, { useState, useRef } from 'react';
import { activity, gender, sport } from '../../../data/data';
import { calculateEnergyNeeds } from './calculations';
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
import '../../styles/tools.scss';


const EnergyNeeds = () => {
    const [needs, setNeeds] = useState(0);
    const [values, setValues] = useState({
        height: '',
        weight: '',
        age: '',
        activityLevel: '',
        sportLevel: '',
        sportTime: '',
        genderLevel: ''
    });
    const formRef = useRef(null);

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
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const result = calculateEnergyNeeds(values);
        if (!!result) {
            setNeeds(result);
        }
    };

    return (
        <Box className="tools">
            <h2>Calcul du besoin énergétique</h2>
            <Card className="tools-energy" component="form" onSubmit={handleSubmit} ref={formRef}>
                <FormGroup className="tools-energy-group">
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
                        <FormLabel component="legend">Dépense énergétique de base</FormLabel>
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
                        <FormLabel component="legend">Dépense selon la pratique sportive</FormLabel>
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
                        <FormLabel component="legend">Dépense selon le genre</FormLabel>
                        <RadioGroup row value={values.genderLevel} onChange={handleChange}>
                            {genderRadios.map(elem =>
                                <FormControlLabel
                                    key={elem.name}
                                    control={<Radio />}
                                    name="genderLevel"
                                    labelPlacement="start"
                                    label={elem.name}
                                    value={elem.value}
                                />
                            )}
                        </RadioGroup>
                    </FormControl>
                    <Paper className="tools-energy-result">Calories par jour : {needs}</Paper>
                    <Box className="tools-energy-action">
                        <Button className="tools-energy-action-calculate" type="submit" variant="outlined" color="success">Calculer</Button>
                        <Button className="tools-energy-action-clear" onClick={handleClear} variant="outlined" color="warning">Initialiser</Button>
                    </Box>
                </FormGroup>
            </Card>
        </Box >
    );
};

export default EnergyNeeds;