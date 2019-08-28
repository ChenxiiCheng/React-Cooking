import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Baozi extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="包子" />
      </div>
    );
  }
}

export default Baozi;
