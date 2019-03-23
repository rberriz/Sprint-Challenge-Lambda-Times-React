import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  
  return (
    <div className={ props.tab.toUpperCase() === props.selectTabHandler ? 'tab active-tab' : 'tab'}
      onClick={e => { props.selectedTab(e.target.innerText)
    }}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default Tab;
