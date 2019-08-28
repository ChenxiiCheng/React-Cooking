import React, { Component } from 'react';
import Header from './components/Header';
import NavLeft from './components/LeftNav';
import './App.less';

/**
 * 首页页面最外层拼接地方
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-body">
          <div className="left-section">
            <NavLeft />
          </div>
          <div className="right-section">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default App;
