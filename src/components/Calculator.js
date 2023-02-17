import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleEvent = (e) => {
    setState(calculate(state, e.target.innerHTML));
  };

  const { total, next, operation } = state;
  let result = 0;
  if (total) {
    result = `${total} ${operation || ''} ${next || ''}`;
  } else if (next) {
    result = next;
  }
  return (
    <div className="calculator">
      <div className="calculator__display">{result}</div>
      <button onClick={handleEvent} type="button" className="key">AC</button>
      <button onClick={handleEvent} type="button" className="key">÷/-</button>
      <button onClick={handleEvent} type="button" className="key">%</button>
      <button onClick={handleEvent} type="button" className="key orange">÷</button>
      <button onClick={handleEvent} type="button" className="key">7</button>
      <button onClick={handleEvent} type="button" className="key">8</button>
      <button onClick={handleEvent} type="button" className="key">9</button>
      <button onClick={handleEvent} type="button" className="key orange">x</button>
      <button onClick={handleEvent} type="button" className="key">4</button>
      <button onClick={handleEvent} type="button" className="key">5</button>
      <button onClick={handleEvent} type="button" className="key">6</button>
      <button onClick={handleEvent} type="button" className="key orange">-</button>
      <button onClick={handleEvent} type="button" className="key">1</button>
      <button onClick={handleEvent} type="button" className="key">2</button>
      <button onClick={handleEvent} type="button" className="key">3</button>
      <button onClick={handleEvent} type="button" className="key orange">+</button>
      <button onClick={handleEvent} type="button" className="key span-2">0</button>
      <button onClick={handleEvent} type="button" className="key">.</button>
      <button onClick={handleEvent} type="button" className="key orange">=</button>
    </div>
  );
};

export default Calculator;
