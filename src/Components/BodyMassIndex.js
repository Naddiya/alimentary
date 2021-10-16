import React, { useState } from 'react';


const BodyMassIndex = () => {
  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [clear, setClear] = useState(false);

  function calculate(e) {
    e.preventDefault();
    const resultBmi = (Math.abs(weight) / Math.pow(Math.abs(height), 2)).toFixed(2);
    setBmi(resultBmi);
  };

  function clearForm(e) {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(!clear);
    setBmi(0);
  };

  return (
    <div className="bmi">
      <h2>Calculer l'indice de masse corporelle</h2>
      <p>
        Le poids divisé par le carré de la taille en metre.
      </p>
      <p>
        ex) 116/1.72² = 39.21;
      </p>
      <form className="bmi-form">
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

        <label htmlFor="calculation-result">Resultat:</label>
        <input id="calculation-result" value={bmi} readOnly />

        <div className="call-to-action">
          <button id="button-calculate" className="button-calculate" onClick={calculate}>Calcul du BMI</button>
          <button id="button-clear" className="button-clear" onClick={clearForm}>Initialiser</button>
        </div>
      </form>
    </div>

  );
};


export default BodyMassIndex;