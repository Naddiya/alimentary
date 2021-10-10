import React, { useState } from 'react';
import { activity, gender, sport } from '../../data/data';

const EnergyRequirement = () => {
  const [needs, setNeeds] = useState(0);
  const [clear, setClear] = useState(false);
  const [checked, setChecked] = useState(false);
  const [uncheck, setUncheck] = useState(true);
  const [ratio, setRatio] = useState('');

  // Defines checkboxes
  const activityCheckBoxes = activity.map(elem => ({
    name: elem.level,
    value: elem.ratio,
    state: checked
  }));
  const genderCheckBoxes = gender.map(elem => ({
    name: elem.type,
    value: elem.ratio,
  }));
  const sportCheckBoxes = sport.map(elem => ({
    name: elem.level,
    value: elem.ratio,
  }));

  // Handles changes
  const handleChange = (e) => {
    // set checked
    setChecked(!checked);
    // get target value
    setRatio(e.target.value);
    // uncheck other boxes in same group
    const boxes = document.getElementsByClassName(e.target.className);
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id !== e.target.id) {
        boxes[i].checked = false;
      }
    }
  };

  // calculate Physical activity
  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    console.log(e)
    
    
    document.querySelector('#calculation-result').value;
  };
  
  // clear after calculation
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
            <div key={elem.name.toString()}>
              <input
                className="activity-boxes"
                type="checkbox"
                name={elem.name}
                id={elem.name}
                value={elem.value}
                defaultChecked={elem.checked}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>

        <h4>Dépense selon la pratique sportive</h4>
        <div className="sport">
          {sportCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="sport-boxes"
                type="checkbox"
                name={elem.name}
                value={elem.value}
                id={elem.name}
                defaultChecked={elem.checked}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>

        <h4>Genre</h4>
        <div className="gender">
          {genderCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className= "gender-boxes"
                type="checkbox"
                name={elem.name}
                value={elem.value}
                id={elem.name}
                defaultChecked={elem.checked}
                onChange={handleChange}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
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