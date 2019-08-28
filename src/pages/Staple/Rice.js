import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Rice extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="米饭" />
      </div>
    );
  }
}

export default Rice;
