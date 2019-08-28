import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Cake extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="蛋糕" />
      </div>
    );
  }
}

export default Cake;
