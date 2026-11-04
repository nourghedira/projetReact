
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('Aucun clic pour le moment');
  const [totalClics, setTotalClics] = useState(0);
  const [historique, setHistorique] = useState([]);

  // Incrementer le compteur
  const handleIncrement = () => {
    const nouveauCompte = count + step;
    setCount(nouveauCompte);
    setMessage('Ajout de ' + step);
    setTotalClics(totalClics + 1);

    const action = '+' + step;
    setHistorique([...historique, action]);
  };

  // Decrementer le compteur
  const handleDecrement = () => {
    const nouveauCompte = count - step;
    setCount(nouveauCompte);
    setMessage('Retrait de ' + step);
    setTotalClics(totalClics + 1);

    const action = '-' + step;
    setHistorique([...historique, action]);
  };

  // Reinitialiser le compteur
  const handleReset = () => {
    setCount(0);
    setMessage('Remise a zero');
    setTotalClics(totalClics + 1);
    setHistorique([]);
  };

  // Changer la couleur selon le signe du compteur
  const getStyleClass = () => {
    if (count > 0) return 'counter-display positive';
    if (count < 0) return 'counter-display negative';
    return 'counter-display zero';
  };

  return (
    <div className="counter-card">

      <div className={getStyleClass()}>
        {count}
      </div>

      <div className="btn-group">
        <button
          className="btn btn-dec"
          onClick={handleDecrement}
        >
          -{step}
        </button>

        <button
          className="btn btn-reset"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="btn btn-inc"
          onClick={handleIncrement}
        >
          +{step}
        </button>
      </div>

      <div className="step-control">
        <label>Pas d'incrémentation :</label>

        <select
          value={step}
          onChange={(e) =>
            setStep(parseInt(e.target.value, 10))
          }
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="history-card">
        <p>
          <strong>📢 Dernière action :</strong>{' '}
          {message}
        </p>

        <p>
          <strong>🔢 Nombre total de clics :</strong>{' '}
          {totalClics}
        </p>

        {historique.length > 0 && (
          <p>
            <strong>📜 Historique simple :</strong>{' '}
            {historique.join(', ')}
          </p>
        )}
      </div>

    </div>
  );
}
