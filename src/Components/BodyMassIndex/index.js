import React, { useState } from 'react';
import { calculateBmi } from './calculations';

function BodyMassIndex() {

  const [bmi, setBmi] = useState(0);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [clear, setClear] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const result = calculateBmi(weight, height);
    setBmi(result);
  };

  function handleClear(e) {
    e.preventDefault();
    setClear(!clear);
    setWeight('');
    setHeight('');
    setBmi(0);
  };

  return (
    <div className="bmi">
      <h2>Calculer l'indice de masse corporelle</h2>

      <form className="bmi-form" onSubmit={handleSubmit}>
        <label htmlFor="height">Taille:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <label htmlFor="weight">Poids:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <div className="calculation-result">Resultat: {bmi}</div>
        <div className="call-to-action">
          <button id="button-calculate" className="button-calculate" type="submit">Calcul du BMI</button>
          <button id="button-clear" className="button-clear" onClick={handleClear}>Initialiser</button>
        </div>
      </form>

    </div>

  );
};

export default BodyMassIndex;