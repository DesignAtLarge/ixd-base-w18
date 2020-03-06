import { connect } from 'react-redux';
import React, { useEffect } from 'react';

import MenuPage from '../components/MenuPage';
import { openDrawer } from '../actions/drawerActions';
import { setDrink } from '../actions/drinkActions';

import drinks from '../assets/drinks.json';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-146957007-2');
ReactGA.pageview(window.location.pathname + window.location.search);

let milk = [];
let fruit = [];

for (let drink in drinks) {
  if (drinks[drink]['type'] === 'milk') {
    milk.push([drink, drinks[drink]]);
  }
  else {
    fruit.push([drink, drinks[drink]]);
  }
}

const MenuPageContainer = (props) => {

  useEffect(() => {
    ReactGA.ga('send', 'pageview', '/menu');
  }, []);

  const onSubmit = () => {
    props.openDrawer();
  }

  const setDrink = (values) => {
    props.setDrink(values);
  }

  return (
    <MenuPage setDrink={setDrink} onSubmit={onSubmit} milk={milk} fruit={fruit} />
  );
};

export default connect(
  null,
  { openDrawer, setDrink }
)(MenuPageContainer);
