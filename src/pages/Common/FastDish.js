import React, { Component } from 'react';
import CardList from '../../components/CardList';
import './style.less';

class FastDish extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="快手菜" />
      </div>
    );
  }
}

export default FastDish;
