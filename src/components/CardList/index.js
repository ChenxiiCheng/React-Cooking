import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import Axios from '../../utils/requestJsonp';
import './style.less';

const { Meta } = Card;

class CardList extends Component {
  state = {
    list: []
  };

  componentDidMount() {
    this.getCardData(this.props.keyword);
  }

  componentWillReceiveProps(nextProps) {
    this.getCardData(nextProps.keyword);
  }

  /**
   * 请求获取数据
   */
  // //Axios
  // getCardData(keyword) {
  //   getItem({
  //     keyword,
  //     num: 10,
  //     appkey: '87d7dab071963359'
  //   })
  //     .then(res => {
  //       this.setState({
  //         cardList: res.result.list
  //       });
  //     })
  //     .catch(err => {
  //       throw err;
  //     });
  // }

  //Jsonp
  getCardData = keyword => {
    const num = 12;
    Axios.jsonp({
      url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=87d7dab071963359`
    }).then(res => {
      if (res.status === 0) {
        let list = this.renderCardList(res.result.list);
        this.setState({
          list: list
        });
      }
    });
  };

  /**
   * 渲染卡片
   */
  renderCardList = data => {
    return data.map(item => {
      return (
        <div className="card-list" key={item.id}>
          <NavLink to={{ pathname: `/detail/${item.id}`, state: item }}>
            <Card
              hoverable
              style={{ width: 262, marginLeft: 16 }}
              size="small"
              cover={<img alt="example" src={item.pic} />}
            >
              <Meta title={item.name} description={item.tag.split(',')[1]} />
            </Card>
          </NavLink>
        </div>
      );
    });
  };

  render() {
    const { list } = this.state;
    return <div>{list}</div>;
  }
}

export default CardList;
