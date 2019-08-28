import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Bread extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="面包" />
      </div>
    );
  }
}

export default Bread;
