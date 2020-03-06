import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import HomePage from '../components/HomePage2';
import { openDrawer } from '../actions/drawerActions';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-146957007-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const HomePageContainer = (props) => {
  useEffect(() => {
    ReactGA.ga('send', 'pageview', '/b');
  }, []);

  const onSubmit = () => {
    props.openDrawer();
  }

  const onCascade = (value) => {
    ReactGA.event({
      category: 'Filter',
      action: 'Dropdown'
    });
  }

  return (
    <HomePage onSubmit={onSubmit} username={props.username} onCascade={onCascade} />
  );
};

const mapStateToProps = state => ({
  username: state.user.username
});

export default connect(
  mapStateToProps,
  { openDrawer }
)(HomePageContainer);
