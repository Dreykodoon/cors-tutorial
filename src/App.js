import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  doSimpleCorsRequest() {
	  axios.get('http://localhost:8082/simple')
      .then((response) => {
        console.log('worked!', response);
      })
      .catch((...response) => {
	      console.log('didn\'t work', response);
      });
  }

  doRequestWhichTriggersCorsPreflight() {
    const config = {
      headers: {
        TEST_HEADER: 'test header value'
      }
    };

    axios.post('http://localhost:8082/preflight', undefined, config)
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
        <button onClick={this.doSimpleCorsRequest}>Simple</button>
        <button onClick={this.doRequestWhichTriggersCorsPreflight}>CORS preflight</button>
      </div>
    );
  }
}

export default App;
