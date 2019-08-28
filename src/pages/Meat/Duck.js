import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Duck extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="鸭肉" />
      </div>
    );
  }
}

export default Duck;
