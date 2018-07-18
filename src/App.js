import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  doCorsRequest() {
	  axios.get('http://localhost:8082/pens')
      .then((response) => {
        console.log('worked!', response);
      })
      .catch((...response) => {
	      console.log('didn\'t work', response);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.doCorsRequest}>Press me!</button>
      </div>
    );
  }
}

export default App;
