import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Milk extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="牛奶" />
      </div>
    );
  }
}

export default Milk;
