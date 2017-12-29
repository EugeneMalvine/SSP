import React, { Component } from 'react';
import cat from './img/cat.jpg';
import './Foto1.css';

class Foto1 extends Component {
  render() {
    return (
      <div className="Foto">
          <img src={cat} className="Foto-ava" alt="avatar" />
      </div>
    );
  }
}

export default Foto1;
