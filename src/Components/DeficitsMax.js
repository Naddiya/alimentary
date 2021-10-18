import React, { useState } from "react";
import { calculateMaxEntriesDeficit, calculateMaxIncreaseActivity } from "./utils";

function DeficitsMax() {

  const [clear, setClear] = useState(false);
  const [calories, setCalories] = useState('');
  const [entriesDeficit, setEntriesDeficit] = useState(0);
  const [increaseActivity, setIncreaseActivity] = useState(0);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    setEntriesDeficit(calculateMaxEntriesDeficit(calories));
    setIncreaseActivity(calculateMaxIncreaseActivity(calories));
  }

  function handleClear() {
    setEntriesDeficit(0);
    setIncreaseActivity(0);
    setCalories('')
    setClear(!clear);
  }

  return (
    <div className="deficits">
      <h2>Calcul des déficits max</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="calories">Consomation calorique actuelle:</label>
        <input type="number" id="calories" name="calories" onChange={handleChange} value={calories}/>

        <div className="deficits-entries">Déficit Maximales des entrées caloriques : {entriesDeficit}</div>
        <div className="deficits-activity">Déficit Maximales des dépense d'activité : {increaseActivity}</div>

        <div className="call-to-action">
          <button className="button-calculate" type="submit">Calculer</button>
          <button className="button-clear" onClick={handleClear} >Initialiser</button>
        </div>
      </form>

    </div>
  );
};

export default DeficitsMax;