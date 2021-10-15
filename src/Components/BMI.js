import React, { useState } from 'react';


const BMI = () => {
  const [bmi, setBMI] = useState(0);
  const [clear, setClear] = useState(false);

  const Calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let height = document.querySelector('#height').value;
    if (height == '') return;
    let weight = document.querySelector('#weight').value;
    if (weight == '') return;
    let bmi = (Math.abs(weight) / Math.pow(Math.abs(height), 2)).toFixed(2);
    setBMI(bmi);
    document.querySelector('#calculation-result').value;
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(true);
    setBMI(0);
  };

  return (
    <div className="BMI">
      <h2>Calculer l'indice de masse corporel</h2>
      <p>
        Le poids divisé par le carré de la taille en metre.
      </p>
      <p>
        ex) 116/1.72² = 39.21;
      </p>
      <form className="">
        <label htmlFor="height">Taille:</label>
        <input type="number" id="height" name="height" />

        <label htmlFor="weight">Poids:</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="calculation-result">Resultat : </label>
        <input id="calculation-result" value={bmi} readOnly />

        <div className="call-to-action">
          <button className="button-calculate" onClick={Calculate}>Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>
      </form>
    </div>

  );
};


export default BMI;