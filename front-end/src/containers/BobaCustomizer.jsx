import React from 'react';
import { connect } from 'react-redux';

import BobaCustomizer from '../components/BobaCustomizer';
import { setValues } from '../actions/sliderActions';

const BobaCustomizerContainer = props => {
  const sliderChange = (values) => {
    props.setValues(values);
  }

  const onChange = (values) => {
    console.log(values);
  }

  return (
    <BobaCustomizer
      values={props.values}
      sliderChange={sliderChange}
      color={props.currDrink.color}
      onChange={onChange}
      />
  );
};

const mapStateToProps = state => ({
  values: state.slider,
  currDrink: state.drink.currDrink
});

export default connect(
  mapStateToProps,
  { setValues }
)(BobaCustomizerContainer);
