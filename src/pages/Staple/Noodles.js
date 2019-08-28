import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Noodles extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="拉面" />
      </div>
    );
  }
}

export default Noodles;
