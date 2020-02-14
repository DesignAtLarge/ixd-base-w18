import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DrinkDrawer from '../components/DrinkDrawer';
import { closeDrawer } from '../actions/drawerActions';

const DrinkDrawerContainer = props => {

  const onClose = () => {
    props.closeDrawer();
  }

  return (
    <DrinkDrawer visible={props.visible} onClose={onClose}/>
  );
};

const mapStateToProps = state => ({
  visible: state.drawer.visible
});

export default connect(
  mapStateToProps,
  { closeDrawer }
)(DrinkDrawerContainer);
