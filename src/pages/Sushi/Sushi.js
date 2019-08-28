import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Sushi extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="寿司" />
      </div>
    );
  }
}

export default Sushi;
