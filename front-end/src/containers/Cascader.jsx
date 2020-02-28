import { connect } from 'react-redux';
import React from 'react';

import Cascader from '../components/Cascader';
import { getDrinks } from '../actions/menuActions.js';

const CascaderContainer = (props) => {

  const onChange = (value) => {
    props.getDrinks(value[0]);
  }

  return (
    <Cascader onChange={onChange} />
  );
};

export default connect(
  null,
  { getDrinks }
)(CascaderContainer);
