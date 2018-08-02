import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  
  this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this);
  this.reset = this.reset.bind(this);
  };
  
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement(){
    this.setState({
      count: this.state.count - 1
    })
  }

  reset(){
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className='counter-div'>
        <h1>Counter App</h1>
        <button className='inc' onClick={this.increment}>Increment!</button>&nbsp;&nbsp;
        <button className='dec' onClick={this.decrement}>Decrement!</button>&nbsp;&nbsp;
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default App;
