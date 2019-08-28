import React, { Component } from 'react';
import CardList from '../../components/CardList';
import './style.less';

class GoodWithRice extends Component {
  render() {
    return (
      <div className="home-section">
        <CardList keyword="下饭菜" />
      </div>
    );
  }
}

export default GoodWithRice;
