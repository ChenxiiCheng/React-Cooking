import React, { Component, Fragment } from 'react';
import { Table, Tag, Divider } from 'antd';
import './style.less';

/**
 * 表格展示
 */
const columns = [
  {
    title: '用料',
    dataIndex: 'mname',
    key: 'mname'
  },
  {
    title: '用量',
    dataIndex: 'amount',
    key: 'amount'
  }
];

class Detail extends Component {
  state = {
    menu: this.props.location.state || {}
  };

  /**
   * 渲染做菜步骤
   */
  renderMenuStep = data => {
    return data.map((item, index) => (
      <Fragment key={index}>
        <div className="process-item">
          <img src={item.pic} alt="process pics" />
          <div className="process-info">
            <p className="stepNum">{index + 1}</p>
            <p dangerouslySetInnerHTML={{ __html: item.pcontent }} />
          </div>
        </div>
        <Divider style={{ margin: '18px 0 18px 5px' }} />
      </Fragment>
    ));
  };

  /**
   * 渲染标签 tags
   */
  // renderTag = data => {
  //   console.log(data);
  //   return data.split(',').forEach((item, index) => (
  //     <Fragment key={index}>
  //       <Tag color="magenta">{item}</Tag>
  //     </Fragment>
  //   ));
  // };

  render() {
    const { menu } = this.state;
    return (
      <div className="detail-section">
        <div className="item">
          <img src={menu.pic} alt="pic" />
          <div className="info">
            <p>菜名：{menu.name}</p>
            <p>准备时间：{menu.preparetime}</p>
            <p>制作时间：{menu.cookingtime}</p>
            <p>用餐人数：{menu.peoplenum}</p>
            {/* <p>标签类型：{menu.tag}</p> */}
            <p>
              标签类型：
              <Tag color="magenta">{menu.tag}</Tag>
            </p>
          </div>
        </div>
        <div className="content">
          <p dangerouslySetInnerHTML={{ __html: menu.content }} />
        </div>
        <div className="material">
          <p>食材准备</p>
          <Table
            dataSource={menu.material}
            columns={columns}
            pagination={false}
          />
        </div>
        <div className="process">
          <p>做法步骤</p>
          {this.renderMenuStep(menu.process)}
        </div>
      </div>
    );
  }
}

export default Detail;
