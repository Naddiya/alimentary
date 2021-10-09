import React, { useState, useEffect } from 'react';
import { activity, gender, sport } from '../../data/data';

const EnergyRequirement = () => {
  const [needs, setNeeds] = useState(0);
  const [clear, setClear] = useState(false);

  const [activityCheckBoxes, setActivityCheckboxes] = useState(activity.map(elem => ({
    activity: elem.level,
    value: elem.ratio,
    checked: false
  })));

  const [genderCheckBoxes, setgenderCheckboxes] = useState(gender.map(elem => ({
    gender: elem.type,
    value: elem.ratio,
    checked: false
  })));

  const [sportCheckBoxes, setsportCheckboxes] = useState(sport.map(elem => ({
    sport: elem.level,
    value: elem.ratio,
    checked: false
  })));

  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);

    let height = document.querySelector('#height').value;
    if (height == '') return;

    let weight = document.querySelector('#weight').value;
    if (weight == '') return;

    let needs = (Math.abs(weight) * 9.99) / (Math.abs(height) * 6.25);

    setNeeds(needs);

    document.querySelector('#calculation-result').value;
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(true);
    setNeeds(0);
  };

  return (
    <div className="energy">
      <h2>Calculer vos dépenses energétiques</h2>

      <form className="calory-needs">

        <label htmlFor="height">Taille:</label>
        <input type="number" id="height" name="height" />
        <label htmlFor="weight">Poids:</label>
        <input type="number" id="weight" name="weight" />


        <h4>Dépense énergétique de base</h4>
        <div className="activity">
          {activityCheckBoxes.map(elem =>
            <div key={elem.activity.toString()}>
              <input
                type="checkbox"
                name={elem.activity}
                value={elem.ratio}
              />
              <label htmlFor={elem.activity}>{elem.activity}</label>
            </div>
          )}
        </div>

        <h4>Dépense selon la pratique sportive</h4>
        <div className="sport">
          {sportCheckBoxes.map(elem =>
            <div key={elem.sport.toString()}>
              <input
                type="checkbox"
                name={elem.sport}
                value={elem.ratio}
              />
              <label htmlFor={elem.sport}>{elem.sport}</label>
            </div>
          )}
        </div>

        <h4>Genre</h4>
        <div className="gender">
          {genderCheckBoxes.map(elem =>
            <div key={elem.gender.toString()}>
              <input
                type="checkbox"
                name={elem.gender}
                value={elem.ratio}
              />
              <label htmlFor={elem.type}>{elem.gender}</label>
            </div>
          )}

        </div>

        <label className="calculation-result" htmlFor="calculation-result">Resultat : </label>
        <input className="calculation-result" type="number" id="calculation-result" value={needs} readOnly />

        <div className="call-to-action">
          <button className="button-calculate" onClick={calculate}>Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>


      </form>
    </div>

  );
};


export default EnergyRequirement;