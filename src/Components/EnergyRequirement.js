import React, { useState } from 'react';


const EnergyRequirement = () => {
  const [energy, setEnergy] = useState(0);
  const [clear, setClear] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let height = document.querySelector('#height').value;
    if (height == '') return;
    let weight = document.querySelector('#weight').value;
    if (weight == '') return;
    let energy = (Math.abs(height) / Math.pow(Math.abs(weight), 2)).toFixed(2);
    setEnergy(energy);
    document.querySelector('#energy').value;
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log("cleared");
    document.querySelector('form').reset();
    setClear(true);
    setEnergy(0);
  };

  return (
    <div className="energy">
      <div>
        <h2> Besoin energetique en calories</h2>
        <p>
          Femme = PA *[(9.99*poids) + (6.25*taille) - (4.92*Age) - 161]
        </p>
        <p>
          Homme = PA *[(9.9*Poids) + (6.25*Taille) -(9.92*Age) + 5]
        </p>
        <h3>PA Indice de base selon l'activité (l'emploi):</h3>
        <h4>PA = Physical Activity</h4>
        <ul>
          <li>Trés faible : 1.4</li>
          <li>Faible : 1.5</li>
          <li>Modéré: 1.6</li>
          <li>Important : 1.7</li>
        </ul>
      </div>
      <div>
        <h3>PA Indice Spécifique selon la pratique sportive :</h3>
        <ul>
          <li>Faible : 0.02*heures/semaine
            (marche lente, yoga, billard, etc.)</li>
          <li> Moyenne : 0.04*heures/semaine
            (marche rapide, cyclo-tourisme, etc.)
          </li>
          <li>Forte : 0.06*heures/semaine
            (jogging, squash, etc.)
          </li>
        </ul>
        <h3>Exemple d'application :</h3>
        <p>
          Sylvie: 32 ans, 1.60m , 78kg (IMC : 30kg/m²)
          Caissière, Marche lentement 1h par jour pour aller travailler.
        </p>
        <ul>
          <li>PA Base : 1.4 / PA Spécifique : 0.02*5 = 0.1 </li>
          <li> PA global = 1.4 + 0.1 = 1.5 </li>
          <li>Besoin energetique : 1.5 * (9.9*78) + (6.25*160) - (4.92*32) - 161 = 2191.17</li>
        </ul>
      </div>

      <form className="needs">
        <label htmlFor="height">Taille:</label>
        <input type="number" id="height" name="height" />

        <label htmlFor="weight">Poids:</label>
        <input type="number" id="weight" name="weight" />

        <label htmlFor="female">Activité de base:</label>
        <input type="number" id="female" name="female" />

        <label htmlFor="female">Pratique sportive</label>
        <input type="number" id="female" name="female" />

        <label htmlFor="energy">Resultat : </label>
        <input type="number" id="energy" value={energy} readOnly />

        <h4>Dépense énergétique de base</h4>
        <div className="activity">
          <input type="checkbox" id="activity-veryLow" name="activity-veryLow" />
          <label htmlFor="activity-veryLow">Très faible</label>

          <input type="checkbox" id="activity-low" name="activity-low" />
          <label htmlFor="activity-low">Faible</label>

          <input type="checkbox" id="activity-moderate" name="activity-moderate" />
          <label htmlFor="activity-moderate">Modéré</label>

          <input type="checkbox" id="activity-intense" name="activity-intense" />
          <label htmlFor="activity-intense">Important</label>
        </div>

        <h4>Dépense selon la pratique sportive</h4>
        <div className="sport">
          <input type="checkbox" id="sport-low" name="sport-low" />
          <label htmlFor="sport-low">Faible</label>

          <input type="checkbox" id="sport-moderate" name="sport-moderate" />
          <label htmlFor="sport-moderate">Moyenne</label>

          <input type="checkbox" id="sport-intense" name="sport-intense" />
          <label htmlFor="sport-intense">Forte</label>
        </div>

        <h4>Genre</h4>
        <div className="gender">
          <input type="checkbox" id="male" name="male" />
          <label htmlFor="male">Male</label>
          <input type="checkbox" id="female" name="female" />
          <label htmlFor="female">Female</label>
        </div>

        <div className="call-to-action">
          <button className="button-calculate" onClick={calculate}>Calculer</button>
          <button className="button-clear" onClick={Clear}>Initialiser</button>
        </div>
      </form>
    </div>

  );
};


export default EnergyRequirement;