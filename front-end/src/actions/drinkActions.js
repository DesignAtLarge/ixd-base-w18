import { SET_DRINK } from './types';

export const setDrink = (drink) => async dispatch => {

  const formattedDrink = {
    name: drink[0],
    color: drink[1].color
  }

  dispatch({
    type: SET_DRINK,
    payload: formattedDrink
  });
}
