import drinks from '../assets/drinks.json';

import { UPDATE_DRINKS } from './types';

export const getDrinks = () => async dispatch => {
  let milk = [];
  let fruit = [];
  let all = [];

  for (let drink in drinks) {
    if (drinks[drink]['type'] === 'milk') {
      milk.push([drink, drinks[drink]]);
    }
    else {
      fruit.push([drink, drinks[drink]]);
    }
    all.push([drink, drinks[drink]])
  }

  dispatch({
    type: UPDATE_DRINKS,
    payload: {
      drinks: all
    }
  });
}
