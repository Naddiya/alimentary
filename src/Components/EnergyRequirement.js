import React, { useState } from 'react';
import { activity, gender, sport } from '../../data/data';
import { calculateEnergyRequirement } from './utils';

const EnergyRequirement = () => {
  const [needs, setNeeds] = useState(0);
  const [targetValues, setTargetValues] = useState({});

  const activityCheckBoxes = activity.map(elem => ({
    name: elem.level,
    value: elem.ratio,
  }));
  const genderCheckBoxes = gender.map(elem => ({
    name: elem.type,
    value: elem.ratio,
  }));
  const sportCheckBoxes = sport.map(elem => ({
    name: elem.level,
    value: elem.ratio,
  }));

  function handleCheck(e) {
    const boxes = document.getElementsByClassName(e.target.className);
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id !== e.target.id) {
        boxes[i].checked = false;
      }
    }
  };

  function handleChange(e) {
    handleCheck(e);
    const value = e.target.value;
    const name = e.target.name;
    setTargetValues(values => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = calculateEnergyRequirement(targetValues)
    !!result ? setNeeds(result) : setNeeds("Error make sure all fields are filled")
  };

  function handleClear(e) {
    e.preventDefault();
    document.getElementById('calory-needs').reset();
    setNeeds(0);
    setTargetValues({...0});
  };

  return (
    <div className="energy">
      <h2>Calcul des dépenses energétiques</h2>
      <form id="calory-needs" onSubmit={handleSubmit}>
        <label htmlFor="height">Taille:</label>
        <input
          type="number"
          name="height"
          onChange={handleChange}
        />
        <label htmlFor="weight">Poids:</label>
        <input
          type="number"
          name="weight"
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          onChange={handleChange}
        />
        <h4>Dépenses énergétique de base</h4>
        <div className="activity">
          {activityCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="activityLevel"
                type="checkbox"
                name="activityLevel"
                id={elem.name}
                value={elem.value}
                defaultChecked={false}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>
        <h4>Dépenses selon la pratique sportive</h4>
        <div className="sport">
          {sportCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="sportLevel"
                type="checkbox"
                name="sportLevel"
                id={elem.name}
                value={elem.value}
                defaultChecked={false}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>
        <div className="sport-time">
          <label htmlFor="sportTime">Hours per week:</label>
          <input
            type="number"
            name="sportTime"
            onChange={handleChange}
          />
        </div>
        <h4>Dépenses selon le genre</h4>
        <div className="gender">
          {genderCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="genderLevel"
                type="checkbox"
                name="genderLevel"
                value={elem.value}
                id={elem.name}
                defaultChecked={false}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>
        <div className="calculation-result">Resultat : {needs}</div>
        <div className="call-to-action">
          <button className="button-calculate" type="submit" >Calculer</button>
          <button className="button-clear" onClick={handleClear}>Initialiser</button>
        </div>
      </form>
    </div>
  );
};


export default EnergyRequirement;