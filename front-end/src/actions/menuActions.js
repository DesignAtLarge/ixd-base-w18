import drinks from '../assets/drinks.json';

import { UPDATE_DRINKS } from './types';

export const getDrinks = () => async dispatch => {
  let milk = [];
  let fruit = [];
  let drinks2 = [];

  for (let drink in drinks) {
    if (drinks[drink]['type'] === 'milk') {
      milk.push([drink, drinks[drink]]);
    }
    else {
      fruit.push([drink, drinks[drink]]);
    }
    drinks2.push([drink, drinks[drink]])
  }

  dispatch({
    type: UPDATE_DRINKS,
    payload: {
      drinks: drinks2
    }
  });
}
