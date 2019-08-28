import React, { Component } from 'react';
import CardList from '../../components/CardList';
import './style.less';
import { Carousel } from 'antd';

class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <div className="carousel">
          <Carousel autoplay>
            <div>
              <img
                src="https://i3.meishichina.com/attachment/mofang/2019/08/22/2019082215664400884968197577.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i3.meishichina.com/attachment/mofang/2019/08/08/2019080815652301311268197577.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i3.meishichina.com/attachment/mofang/2019/08/22/2019082215664697034208197577.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://i3.meishichina.com/attachment/mofang/2018/07/04/2018070415306688849388197577.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://i3.meishichina.com/attachment/mofang/2019/08/13/2019081315656648876218197577.jpg"
                alt=""
              />
            </div>
          </Carousel>
        </div>
        <CardList keyword="牛排" />
      </div>
    );
  }
}

export default Home;
