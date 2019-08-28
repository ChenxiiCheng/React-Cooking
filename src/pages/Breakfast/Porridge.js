import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Porridge extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="粥" />
      </div>
    );
  }
}

export default Porridge;
