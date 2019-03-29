import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {

  let itemName = props.tab === props.selectedTab ? 'tab active-tab' : 'tab';

  return (
    <div className={itemName} onClick ={ () => { return props.selectTabHandler(props.tab)}}>
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
