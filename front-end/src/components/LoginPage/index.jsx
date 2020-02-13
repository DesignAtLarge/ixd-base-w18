import React from 'react';
import { Button, Form, Input } from 'antd';

import boba from '../../assets/boba.svg';
import './style.less';

const LoginPage = props => {
  return (
    <div className="login-page">
      <div className="content">
        <img src={boba} alt="boba"/>
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
              className="form-input"
              placeholder="Password"
              value={props.values.password}
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button className="button">Login</Button>
          </Form.Item>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
