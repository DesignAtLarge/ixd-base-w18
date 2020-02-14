import { connect } from 'react-redux';
import React from 'react';

import HomePage from '../components/HomePage';
import { openDrawer } from '../actions/drawerActions';

const HomePageContainer = (props) => {
  const onSubmit = () => {
    props.openDrawer();
  }

  return (
    <HomePage onSubmit={onSubmit} />
  );
};

export default connect(
  null,
  { openDrawer }
)(HomePageContainer);
