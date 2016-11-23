import React, { Component } from 'react';
import Quote from './Quote';
import Header from './Header';
import quotes_json from './quotes.json';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="jumbotron text-xs-center">
        <Quote quotes={quotes_json}/>
      </div>
     </div>
    );
  }
}

export default App;
