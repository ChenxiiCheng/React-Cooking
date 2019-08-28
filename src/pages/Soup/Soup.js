import React, { Component } from 'react';
import CardList from '../../components/CardList';

class Soup extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="汤" />
      </div>
    );
  }
}

export default Soup;
