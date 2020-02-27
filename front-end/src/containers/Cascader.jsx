import { connect } from 'react-redux';
import React from 'react';

import Cascader from '../components/Cascader';

const CascaderContainer = (props) => {
  const onSubmit = () => {
  }

  return (
    <Cascader />
  );
};

export default connect(
  null,
  { }
)(CascaderContainer);
