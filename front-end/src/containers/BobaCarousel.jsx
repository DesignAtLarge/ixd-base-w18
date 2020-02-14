import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BobaCarousel from '../components/BobaCarousel';
import { getDrinks } from '../actions/menuActions.js';
import { setDrink } from '../actions/drinkActions';

const BobaCarouselContainer = props => {

  useEffect(() => {
    props.getDrinks();
  }, []);

  const onChange = (index) => {
    props.setDrink(props.drinks[index]);
  }

  return (
    <BobaCarousel
      drinks={props.drinks}
      onChange={onChange}
      />
  );
};

const mapStateToProps = state => ({
  drinks: state.menu.drinks
});

export default connect(
  mapStateToProps,
  { getDrinks, setDrink }
)(BobaCarouselContainer);
