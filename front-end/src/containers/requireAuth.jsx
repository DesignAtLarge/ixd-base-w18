import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'connected-react-router';

const withAuth = Component => props => {
  useEffect(() => {
    if (!props.authenticated) {
      props.redirectLogin();
    }
  }, []);

  return <Component {...props} />;
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

const mapDispatchToProps = dispatch => ({
  redirectLogin: () => {
    dispatch(replace('/login'));
  }
});
const requireAuth = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuth
)

export default requireAuth;
