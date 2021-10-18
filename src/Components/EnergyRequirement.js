import React, { useState } from 'react';
import { activity, gender, sport } from '../../data/data';
import { calculateEnergyRequirement } from './utils';

const EnergyRequirement = () => {
  const [clear, setClear] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputCheckboxes, setInputCheckboxes] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [sportTime, setSportTime] = useState('');
  const [needs, setNeeds] = useState(0);

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
    setChecked(!checked);
    const name = e.target.className;
    const value = e.target.value;
    const boxes = document.getElementsByClassName(e.target.className);
    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].id !== e.target.id) {
        boxes[i].checked = false;
      }
    }
    setInputCheckboxes(values => ({ ...values, [name]: value }));
  };

  function handleSubmit(e){
    e.preventDefault();
    setNeeds(calculateEnergyRequirement(weight, height, age, sportTime, inputCheckboxes));
  };

  function handleClear (e){
    e.preventDefault();
    console.log("cleared");
    setNeeds(0);
    setClear(true);
  };

  return (
    <div className="energy">
      <h2>Calculer vos dépenses energétiques</h2>
      <form className="calory-needs" onSubmit={handleSubmit}>

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

        <h4>Dépenses énergétique de base</h4>
        <div className="activity">
          {activityCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="activityLevel"
                type="checkbox"
                name={elem.name}
                id={elem.name}
                value={elem.value}
                defaultChecked={checked}
                onChange={handleCheck}
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
                name={elem.name}
                id={elem.name}
                value={elem.value}
                defaultChecked={checked}
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
            defaultValue="0"
            onChange={e => setSportTime(e.target.value)}
          />
        </div>

        <h4>Dépenses selon le genre</h4>
        <div className="gender">
          {genderCheckBoxes.map(elem =>
            <div key={elem.name.toString()}>
              <input
                className="genderLevel"
                type="checkbox"
                name={elem.name}
                value={elem.value}
                id={elem.name}
                defaultChecked={checked}
                onChange={handleCheck}
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