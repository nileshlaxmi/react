import React, { Component } from 'react';
import './App.css';

import AddTask from './container/AddTask';
import ListItem from './container/LisItem';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddTask />
        <ul>
          <ListItem />
        </ul>
      </div>
    );
  }
}

export default App;
