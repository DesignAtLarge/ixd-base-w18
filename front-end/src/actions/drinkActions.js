import { SET_DRINK } from './types';

export const setDrink = (drink) => async dispatch => {
  const formattedDrink = {
    name: drink[0],
  }

  dispatch({
    type: SET_DRINK,
    payload: formattedDrink
  });
}
