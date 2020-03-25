import React from 'react';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  hendleTab = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    const { activeTab } = this.state;
    const { tabs } = this.props;

    return (
      <div className="wrapper">
        {tabs.map((tab, index) => (
          <button
            key={tab.title}
            type="button"
            onClick={() => this.hendleTab(index)}
            className={activeTab === index ? 'btn btn--active' : 'btn'}
          >
            {tab.title}
          </button>
        ))}
        <p className="content">{tabs[activeTab].content}</p>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
