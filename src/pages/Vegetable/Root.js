import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Root extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="根" />
      </div>
    );
  }
}

export default Root;
