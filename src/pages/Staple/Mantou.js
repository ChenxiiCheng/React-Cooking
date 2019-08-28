import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Mantou extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="馒头" />
      </div>
    );
  }
}

export default Mantou;
