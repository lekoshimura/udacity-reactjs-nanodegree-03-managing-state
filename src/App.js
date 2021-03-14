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

  incNumCorrect() {
    this.setState((currentState) => ({
      numCorrect: currentState.numCorrect + 1
    }))
  };

  incNumQuestions() {
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }));
  };

  randomizeValues() {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);   
    this.setState((currentValue) => ({
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3
    }));
  };

  checkSum(userGuess) {
    const isProposedAnswerCorrect = this.state.proposedAnswer === this.state.value1 + this.state.value2 + this.state.value3;
    const isUserGuessCorrect = isProposedAnswerCorrect === userGuess;
    if (isUserGuessCorrect) this.incNumCorrect();
    this.incNumQuestions();
    this.randomizeValues();
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
          <button onClick={() => this.checkSum(true)}>True</button>
          <button onClick={() => this.checkSum(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
