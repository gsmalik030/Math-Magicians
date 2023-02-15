import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleEvent = (e) => {
    const btnName = e.target.innerHTML;
    const newObject = calculate(this.state, btnName);
    this.setState(newObject);
  }

  render() {
    const { total, next, operation } = this.state;
    let result = 0;
    if (total) {
      result = `${total} ${operation || ''} ${next || ''}`;
    } else if (next) {
      result = next;
    }
    return (
      <div className="calculator">
        <div className="calculator__display">{result}</div>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">AC</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">÷/-</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">%</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key orange">+</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">7</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">8</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">9</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key orange">x</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">4</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">5</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">6</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key orange">-</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">1</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">2</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">3</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key orange">+</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key span-2">0</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key">.</button>
        <button onClick={(e) => this.handleEvent(e)} type="button" className="key orange">=</button>
      </div>
    );
  }
}
// const Component = () => (
//   <div className="calculator">
//     <div className="calculator__display">0</div>
//     <button type="button" className="key">AC</button>
//     <button type="button" className="key">÷/-</button>
//     <button type="button" className="key">%</button>
//     <button type="button" className="key orange">+</button>
//     <button type="button" className="key">7</button>
//     <button type="button" className="key">8</button>
//     <button type="button" className="key">9</button>
//     <button type="button" className="key orange">x</button>
//     <button type="button" className="key">4</button>
//     <button type="button" className="key">5</button>
//     <button type="button" className="key">6</button>
//     <button type="button" className="key orange">-</button>
//     <button type="button" className="key">1</button>
//     <button type="button" className="key">2</button>
//     <button type="button" className="key">3</button>
//     <button type="button" className="key orange">+</button>
//     <button type="button" className="key span-2">0</button>
//     <button type="button" className="key">.</button>
//     <button type="button" className="key orange">=</button>
//   </div>
// );

export default Calculator;
