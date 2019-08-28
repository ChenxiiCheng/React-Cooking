import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Fruit extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="水果" />
      </div>
    );
  }
}

export default Fruit;
