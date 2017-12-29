import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Foto1 from'./Foto1.js';
import Tab from './Tab.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main className="content">
        <Tab />
        <Foto1 />
       <div className="User">
          <h3 className="User-Name"> Eugene Malvine</h3>
          <p className="User-info">meow meow meow</p>
          <a href="https://vk.com/eugene_malvine" className="User-info"> <i class="fa fa-heart-o" aria-hidden="true"></i> vk.com</a>
        </div>
        </main>
      </div>
    );
  }
}

export default App;
