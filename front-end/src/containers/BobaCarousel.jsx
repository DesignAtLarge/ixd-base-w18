import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BobaCarousel from '../components/BobaCarousel';
import { getDrinks } from '../actions/menuActions.js';

const BobaCarouselContainer = props => {

  useEffect(() => {
    props.getDrinks();
  }, []);

  return (
    <BobaCarousel
      drinks={props.drinks}
      />
  );
};

const mapStateToProps = state => ({
  drinks: state.menu.drinks
});

export default connect(
  mapStateToProps,
  { getDrinks }
)(BobaCarouselContainer);
