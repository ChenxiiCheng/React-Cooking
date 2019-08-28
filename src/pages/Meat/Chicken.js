import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Chicken extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="鸡肉" />
      </div>
    );
  }
}

export default Chicken;
