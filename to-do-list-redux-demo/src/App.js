import React, { Component } from 'react';
import './App.css';

import AddTask from './container/AddTask';

import Header from './component/Header';


class App extends Component {
  render() {
    return (
      <div className="body-div">
        <div className="App">
          <Header />
          <AddTask />
          
          
        </div>
      </div>
      
    );
  }
}

export default App;
