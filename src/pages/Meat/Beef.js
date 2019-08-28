import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Beef extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="牛肉" />
      </div>
    );
  }
}

export default Beef;
