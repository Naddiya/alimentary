import React, { useState } from "react";
const Strategy = () => {

  const [clear, setClear] = useState(false);
  const [entriesDeficit, setEntriesDeficit] = useState(0);
  const [increaseActivity, setIncreaseActivity] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    let calories = document.querySelector('#calories').value;
    if (calories == '') return;
    
    
    let maxCalories = Math.abs(calories) * 0.15;
    let maxIncreaseActivity = Math.abs(calories) * 0.20;
    
    setEntriesDeficit(maxCalories);
    setIncreaseActivity(maxIncreaseActivity);
  };

  console.log();
  const Clear = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(true);
    setEntriesDeficit(0);
    setIncreaseActivity(0);
  };

  return (
    <div className="strategy">
      <h2>Calculer le déficit calorique maximum</h2>
      <p>Augmentation de </p>
      <form onSubmit={calculate} >
        <label htmlFor="calories">Consomation calorique actuelle:</label>
        <input type="number" id="calories" name="calories" />
        <label htmlFor="calories-entries">Déficit Maximales des entrées caloriques : </label>
        <input id="calories-entries-max" value={entriesDeficit} readOnly />
        <label htmlFor="calories-activity">Déficit Maximales des dépense d'activité : </label>
        <input id="calories-activity-max" value={increaseActivity} readOnly />
        <div className="call-to-action">
          <button className="button-calculate" type="submit">Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>
      </form>

      <h2>Combiner les déficits</h2>
      <form >
        <label htmlFor="calories">Consomation calorique actuelle:</label>
        <input type="number" id="calories" name="calories" />
        <label htmlFor="calories-entries">Pourcentage du déficit alimentaire : </label>
        <input id="calories-entries-max" value={entriesDeficit} readOnly />
        <label htmlFor="calories-activity">Pourcentage du déficit lié à l'activité physique : </label>
        <input id="calories-activity-max" value={increaseActivity} readOnly />
        <div className="call-to-action">
          <button className="button-calculate" type="submit">Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>
      </form>
    </div>
  );


};

export default Strategy;