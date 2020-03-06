import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Icon, Input } from 'antd';

import './style.less';
import FacebookLogin from '../FacebookLogin';

import { loginUser } from '../../actions/userActions';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-146957007-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const LoginPage = props => {

  useEffect(() => {
    ReactGA.ga('send', 'pageview', '/login');
  }, []);

  const fbResponse = (val) => {
    props.loginUser({
      id: val.id,
      username: val.name
    })
  }

  return (
    <div className="login-page">
      <div className="content">
        <div className="login-drink">
        </div>
        <h1> bubbl•t</h1>
        <form onSubmit={props.handleSubmit} className="login-form">
          <Form.Item>
            <Input
              name="username"
              className="form-input"
              placeholder="Username"
              value={props.values.username}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Input
              name="password"
              type="password"
              className="form-input"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button className="button" onClick={props.handleSubmit}>Login</Button>
          </Form.Item>
          <h4>Login with</h4>
          <FacebookLogin
            responseFacebook={fbResponse}
          />
        </form>
      </div>
    </div>
  );
};

export default connect(
null,
{loginUser}
)(LoginPage);
