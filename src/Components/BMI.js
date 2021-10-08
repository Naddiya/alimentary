import React, { useState } from 'react';


const IBM = () => {
  const [bmi, setBMI] = useState(0);
  const [clear, setClear] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let height = document.querySelector('#height').value;
    if (height == '') return;
    let weight = document.querySelector('#weight').value;
    if (weight == '') return;
    let bmi = (Math.abs(height) / Math.pow(Math.abs(weight), 2)).toFixed(2);
    setBMI(bmi);
    document.querySelector('#bmi').value;
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(true);
    setBMI(0);
  };

  return (
    <div className="ibm">
      <h2> Calculer l'indice de masse corporel</h2>
      <p>
        weight divides Height²
      </p>
      <p>
        has this ex) 116/1.72² = 39.21;
      </p>
      <form>
        <label htmlFor="height">Taille:</label>
        <input type="number" id="height" name="height" />

        <label htmlFor="weight">Poids:</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="bmi">Resultat : </label>
        <input id="bmi" value={bmi} readOnly />

        <button onClick={calculate}>Calculer</button>
        <button onClick={Clear}>Initialiser</button>
      </form>
    </div>

  );
};


export default IBM;