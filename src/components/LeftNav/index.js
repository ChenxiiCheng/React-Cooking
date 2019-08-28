import React, { Component, Fragment } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import menuList from '../../utils/menuNav';

const { SubMenu } = Menu;

class LeftNav extends Component {
  state = {};

  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode
    });
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  /**
   * 点击菜单项
   */
  handleClick = () => {};

  render() {
    return (
      <Fragment>
        <Menu onClick={this.handleClick}>{this.state.menuTreeNode}</Menu>
      </Fragment>
    );
  }
}

export default LeftNav;
