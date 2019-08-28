import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Pork extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="猪肉" />
      </div>
    );
  }
}

export default Pork;
