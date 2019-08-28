import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Dessert extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="甜点" />
      </div>
    );
  }
}

export default Dessert;
