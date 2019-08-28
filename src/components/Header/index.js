import React, { Component } from 'react';
import { Modal } from 'antd';
import './style.less';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { visible: false };

  /**
   * 点击about展示Modal框
   */
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  //OK: 关闭Modal框
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  //Cancel: 关闭Modal框
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="m-header">
        <div className="container">
          <Link to={'/home'}>
            <img
              src={require('../../assets/image/kitchen-logo1.png')}
              alt="website logo"
            />
          </Link>
          <span className="about" onClick={this.showModal}>
            ABOUT
          </span>
          <Modal
            title="ABOUT ME"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>
              Author：
              <a href="https://www.linkedin.com/in/chenxi-cheng-42a564159/">
                Chenxi Cheng
              </a>
            </p>
            <p>
              GitHub：
              <a href="https://github.com/ChenxiiCheng">ChenxiiCheng</a>
            </p>
            <div className="info">
              <p>Technology Stack：</p>
              <p>• React：^16.9.0</p>
              <p>• Axios：^0.19.0</p>
              <p>• Ant Design UI：^3.22.1</p>
              <p>• React-router-dom：^5.0.1</p>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Header;
