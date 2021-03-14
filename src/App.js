import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  initialValue1 = Math.floor(Math.random() * 100);
  initialValue2 = Math.floor(Math.random() * 100);
  initialValue3 = Math.floor(Math.random() * 100);

  state = {
    value1: this.initialValue1,
    value2: this.initialValue2,
    value3: this.initialValue3,
    proposedAnswer: Math.floor(Math.random() * 3) + this.initialValue1 + this.initialValue2 + this.initialValue3,
    numQuestions: 0,
    numCorrect: 0
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
