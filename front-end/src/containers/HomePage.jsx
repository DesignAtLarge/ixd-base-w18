import { connect } from 'react-redux';
import React from 'react';

import HomePage from '../components/HomePage';
import { getDrinks } from '../actions/menuActions';
import { setDrink } from '../actions/drinkActions';
import { openDrawer } from '../actions/drawerActions';


const HomePageContainer = (props) => {
  const onSubmit = () => {
    props.openDrawer();
  }

  const handleChange = (event) => {
    if (event.target && event.target.value === 'Ding Tea') {
      props.getDrinks('dingtea');
    } else if (event.target && event.target.value === 'Happy Lemon' ) {
      props.getDrinks('happylemon');
    } else if (event.target && event.target.value === 'Gong Cha' ) {
      props.getDrinks('gongcha');
    }
  }

  const handleDrinkChange = (event) => {
    if ( event.target && event.target.value ) {
      const currDrink = props.drinks.find(drink => drink[0] === event.target.value);
      if (currDrink) {
        props.setDrink(currDrink);
        props.openDrawer();
      }
    }
  }

  return (
    <HomePage handleChange={handleChange} handleDrinkChange={handleDrinkChange} onSubmit={onSubmit} username={props.username} drinks={props.drinks} />
  );
};

const mapStateToProps = state => ({
  drinks: state.menu.drinks,
  username: state.user.username
});

export default connect(
  mapStateToProps,
  { setDrink, getDrinks, openDrawer }
)(HomePageContainer);
