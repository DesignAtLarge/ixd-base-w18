import { connect } from 'react-redux';
import React from 'react';

import MenuPage from '../components/MenuPage';
import { openDrawer } from '../actions/drawerActions';
import { setDrink } from '../actions/drinkActions';

import drinks from '../assets/drinks.json';

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
