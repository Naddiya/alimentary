import React, { useState } from "react";
import { calculateMaxEntriesDeficit, calculateMaxActivityDeficit, getDifference } from "./calculations";

function Deficits() {

  const [clear, setClear] = useState(false);
  const [calories, setCalories] = useState('');
  const [maxEntriesDeficit, setMaxEntriesDeficit] = useState(0);
  const [maxActivityDeficit, setMaxActivityDeficit] = useState(0);
  const [combinedMaxDeficit, setCombinedMaxDeficit] = useState(0);
  const [entriesRange, setEntriesRange] = useState(0);
  const [activityRange, setActivityRange] = useState(0);

  function handleChange(e) {
    setCalories(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setMaxEntriesDeficit(calculateMaxEntriesDeficit(calories));
    setMaxActivityDeficit(calculateMaxActivityDeficit(calories));
    setCombinedMaxDeficit(calories * 0.25);
    setActivityRange(calories * 0.25 * 0.5);
    setEntriesRange(calories * 0.25 * 0.5);
  }

  function handleRange(e) {
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
  }

  function handleClear() {
    setMaxEntriesDeficit(0);
    setMaxActivityDeficit(0);
    setCalories('');
    setClear(!clear);
  }

  return (
    <div className="deficits">
      <h2>Calcul des déficits max</h2>

      <form className="deficits-calculation" onSubmit={handleSubmit}>
        <label htmlFor="calories">Consomation calorique actuelle:</label>
        <input type="number" id="calories" name="calories" onChange={handleChange} value={calories} />

        <div className="deficits-entries calculation-result" >Déficit Maximales des entrées caloriques : {maxEntriesDeficit}</div>
        <div className="deficits-activity calculation-result">Déficit Maximales des dépense d'activité : {maxActivityDeficit}</div>

        <div className="call-to-action">
          <button className="button-calculate" type="submit">Calculer</button>
          <button className="button-clear" onClick={handleClear} >Initialiser</button>
        </div>
      </form>

      <h2>Combiner les déficits</h2>

      <form >

        <p>Le déficit maximum correspond à 25% de la consommation courante, soit = {combinedMaxDeficit} calories</p>
        <label htmlFor="entries-calories">Entries : {entriesRange}/{maxEntriesDeficit}</label>
        <input
          type="range"
          id="entriesCalories"
          name="entriesCalories"
          min="0" max={maxEntriesDeficit}
          step="1"
          value={entriesRange}
          onChange={handleRange}
        />

        <label htmlFor="activity-calories">Activity : {activityRange}/ {maxActivityDeficit}</label>
        <input
          type="range"
          id="activityCalories"
          name="activityCalories"
          min="0" max={maxActivityDeficit}
          step="1"
          value={activityRange}
          onChange={handleRange}
        />

      </form>

    </div>
  );
};

export default Deficits;