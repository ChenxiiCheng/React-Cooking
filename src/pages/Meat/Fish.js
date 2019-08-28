import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Fish extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="鱼肉" />
      </div>
    );
  }
}

export default Fish;
