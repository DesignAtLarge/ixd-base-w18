import React from 'react';
import { connect } from 'react-redux';

import BobaCustomizer from '../components/BobaCustomizer';
import { setValues } from '../actions/sliderActions';

const BobaCustomizerContainer = props => {
  const sliderChange = (values) => {
    props.setValues(values);
  }

  const onMilkChange = (milk) => {
    //props.setValues([milk, props.values.sugar.replace('%', '')]);
  }

  const onSugarChange = (sugar) => {
    //props.setValues([props.values.milk.replace('%', ''), sugar]);
  }

  return (
    <BobaCustomizer
      values={props.values}
      sliderChange={sliderChange}
      color={props.currDrink.color}
      onMilkChange={onMilkChange}
      onSugarChange={onSugarChange}
      name={props.currDrink.name}
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
