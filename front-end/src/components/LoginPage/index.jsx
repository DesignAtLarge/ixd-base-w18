import React from 'react';
import { Form, Input } from 'antd';

import './style.less';

const LoginPage = props => {
  return (
    <form onSubmit={props.handleSubmit} className="login-form">
      <Form.Item>
        <Input
          name="username"
          className="form-input"
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
          value={props.values.password}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          size="large"
        />
      </Form.Item>
    </form>
  );
};

export default LoginPage;
