import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CurrentBurger from "./Components/CurrentBurgerComponent/currentburger";

class App extends Component {
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
          <CurrentBurger components={COMPONENTS}/>
      </div>
    );
  }
}

export default App;

const COMPONENTS =[
    {name:'cheese', price: 2, added: false},
    {name:'tomatoes', price: 1.5, added: false},
    {name:'mushroom', price: 3, added: false}
];

//we now added the components array as prop to CurrentBurger component