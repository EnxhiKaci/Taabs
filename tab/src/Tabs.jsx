import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  handleTabClick = (index) => {
    this.setState({ activeTab: index });
    const { items } = this.props;
    const { onTabClick } = items[index];
    if (typeof onTabClick === 'function') {
      onTabClick();
    }
  };

  render() {
    const { items } = this.props;
    const { activeTab } = this.state;

    return (
      <div className="tabs">
        <div className="tab-headers">
          {items.map((item, index) => (
            <div
              key={index}
              className={`tab-header ${activeTab === index ? 'active' : ''}`}
              onClick={() => this.handleTabClick(index)}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="tab-content">
          {items[activeTab].content}
        </div>
      </div>
    );
  }
}

export default Tabs;


