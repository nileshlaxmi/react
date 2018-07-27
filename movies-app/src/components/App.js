import React, { Component } from 'react';

import MovieResults from './MovieResults';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies App</h1>
            <p>Who does not like you?</p>
          </div>          
        </div>
        <div className="row">
          <MovieResults  />
        </div>
      </div>
    );
  }
}

export default App;
