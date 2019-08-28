import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Coffee extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="咖啡" />
      </div>
    );
  }
}

export default Coffee;
