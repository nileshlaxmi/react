import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import {increment} from './action/index';
import {decrement} from './action/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.increment(this.props.num)}>Increase</button><br/><br/>
        <button onClick={() => this.props.decrement(this.props.num)}>Decrease</button>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    num: state.num
  }
}

export default connect(mapStateToProps, {increment, decrement})(App);
