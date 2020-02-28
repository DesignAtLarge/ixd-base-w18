import { connect } from 'react-redux';
import React from 'react';

import HomePage from '../components/HomePage';
import { openDrawer } from '../actions/drawerActions';

const HomePageContainer = (props) => {
  const onSubmit = () => {
    props.openDrawer();
  }

  const handleChange = (event) => {
    console.log(event.target);
  }

  return (
    <HomePage handleChange={handleChange} onSubmit={onSubmit} username={props.username} />
  );
};

const mapStateToProps = state => ({
  username: state.user.username
});

export default connect(
  mapStateToProps,
  { openDrawer }
)(HomePageContainer);
