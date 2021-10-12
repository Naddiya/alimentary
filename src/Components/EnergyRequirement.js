import React, { useState } from 'react';
import { activity, gender, sport } from '../../data/data';

const EnergyRequirement = () => {
  const [clear, setClear] = useState(false);
  const [checked, setChecked] = useState(false);
  
  const [inputCheckboxes, setInputCheckboxes] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sportTime, setSportTime] = useState('');

  const [needs, setNeeds] = useState(0);

  // Defines checkboxes
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

  // Handles CheckBoxes
  const handleCheck = (e) => {
    const name = e.target.className;
    const value = e.target.value;
    // set checked
    setChecked(!checked);
    // uncheck other boxes in same group
    const boxes = document.getElementsByClassName(e.target.className);
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id !== e.target.id) {
        boxes[i].checked = false;
      }
    }
    // get inputs values
    setInputCheckboxes(values => ({ ...values, [name]: value }));
  };

  console.log(inputCheckboxes)
  // calculate Physical activity
  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(true);
    let weightPart = 9.9*weight;
    let heightPart = 6.25*height;
    let agePart = 4.92*age;
    let genderPart = parseInt(inputCheckboxes.genderLevel);
    let basicNeeds = weightPart + heightPart - agePart + genderPart;
    let activityPart = Math.abs(inputCheckboxes.activityLevel);
    let sportPart = Math.abs(inputCheckboxes.sportLevel) * sportTime;
    let totalNeeds = basicNeeds * (activityPart + sportPart);
    document.querySelector('form').value;

    setNeeds(Math.floor(totalNeeds));
  };

  // clear after calculation
  const Clear = (e) => {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setNeeds(0);
    setClear(true);
  };

  console.log(needs);
  return (
    <div className="energy">
      <h2>Calculer vos dépenses energétiques</h2>

      <form className="calory-needs" onSubmit={calculate}>

        <label htmlFor="height">Taille:</label>
        <input
          type="number"
          id="height"
          name="height"
          onChange={e => setHeight(e.target.value)}
        />
        <label htmlFor="weight">Poids:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          onChange={e => setWeight(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="weight"
          onChange={e => setAge(e.target.value)}
        />

        <h4>Dépense énergétique de base</h4>
        <div className="activity">
          {activityCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="activityLevel"
                type="checkbox"
                name={elem.name}
                id={elem.name}
                value={elem.value}
                defaultChecked={elem.checked}
                onChange={handleCheck}
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
                className="sportLevel"
                type="checkbox"
                name={elem.name}
                value={elem.value}
                id={elem.name}
                defaultChecked={elem.checked}
                onChange={handleCheck}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}
        </div>
        <div className="sport-time">
          <label htmlFor="sportTime">Hours per week:</label>
          <input
            type="number"
            id="sportTime"
            name="sportTime"
            onChange={e => setSportTime(e.target.value)}
          />
        </div>

        <h4>Genre</h4>
        <div className="gender">
          {genderCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="genderLevel"
                type="checkbox"
                name={elem.name}
                value={elem.value}
                id={elem.name}
                defaultChecked={elem.checked}
                onChange={handleCheck}
              />
              <label htmlFor={elem.name}>{elem.name}</label>
            </div>
          )}

        </div>

        <label className="calculation-result" htmlFor="calculation-result">Resultat : </label>
        <input className="calculation-result" type="number" id="calculation-result" value={needs} readOnly />

        <div className="call-to-action">
          <button className="button-calculate" onClick={calculate} type="submit" >Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>


      </form>
    </div>

  );
};


export default EnergyRequirement;