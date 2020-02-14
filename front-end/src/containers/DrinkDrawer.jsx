import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import DrinkDrawer from '../components/DrinkDrawer';
import { closeDrawer } from '../actions/drawerActions';

const DrinkDrawerContainer = props => {

  const onClose = () => {
    props.closeDrawer();
  }

  return (
    <DrinkDrawer visible={props.visible} onClose={onClose} currDrink={props.currDrink}/>
  );
};

const mapStateToProps = state => ({
  visible: state.drawer.visible,
  currDrink: state.drink.currDrink
});

export default connect(
  mapStateToProps,
  { closeDrawer }
)(DrinkDrawerContainer);
