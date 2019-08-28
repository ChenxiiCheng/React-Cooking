import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Mutton extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="羊肉" />
      </div>
    );
  }
}

export default Mutton;
