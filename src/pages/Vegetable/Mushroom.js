import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Mushroom extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="菌菇" />
      </div>
    );
  }
}

export default Mushroom;
