import { connect } from 'react-redux';
import React from 'react';

import HomePage from '../components/HomePage';
import { getDrinks } from '../actions/menuActions';
import { setDrink } from '../actions/drinkActions';
import { openDrawer } from '../actions/drawerActions';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-146957007-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const HomePageContainer = (props) => {
  const onSubmit = () => {
    props.openDrawer();
  }

  const handleChange = (event) => {
    if (event.target && event.target.value === 'Ding Tea') {
      props.getDrinks('dingtea');
      ReactGA.event({
        category: 'Filter',
        action: 'Search'
      });
    } else if (event.target && event.target.value === 'Happy Lemon' ) {
      props.getDrinks('happylemon');
      ReactGA.event({
        category: 'Filter',
        action: 'Search'
      });
    } else if (event.target && event.target.value === 'Gong Cha' ) {
      props.getDrinks('gongcha');
      ReactGA.event({
        category: 'Filter',
        action: 'Search'
      });
    }
  }

  const handleDrinkChange = (event) => {
    if ( event.target && event.target.value ) {
      const currDrink = props.drinks.find(drink => drink[0] === event.target.value);
      if (currDrink) {
        props.setDrink(currDrink);
        props.openDrawer();
        ReactGA.event({
          category: 'Filter',
          action: 'Search'
        });
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
