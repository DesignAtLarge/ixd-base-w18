import React from 'react';

import MenuPage from '../components/MenuPage';

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

  return (
    <MenuPage milk={milk} fruit={fruit} />
  );
};

export default MenuPageContainer;
