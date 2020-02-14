import { SET_VALUES } from './types';

export const setValues = (percent) => async dispatch => {
  const larger = Math.max(...percent);
  const lesser = Math.min(...percent);
  const sugar = 100 - (larger);
  const tea = larger - lesser;
  const milk = lesser;

  dispatch({
    type: SET_VALUES,
    sugar: `${sugar}%`,
    tea: `${tea}%`,
    milk: `${milk}%`
  });
}
