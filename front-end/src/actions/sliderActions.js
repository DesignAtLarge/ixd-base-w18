import { SET_VALUES } from './types';

export const setValues = (percent, string) => async dispatch => {
  if (string === 'milk') {
    dispatch({
      type: SET_VALUES,
      milk: `${percent}%`
    });
  }
  else if (string === 'sugar') {
    dispatch({
      type: SET_VALUES,
      sugar: `${percent}%`,
    });
  }
  else {
    const larger = Math.max(...percent);
    const lesser = Math.min(...percent);
    const sugar = 100 - (larger);
    const tea = larger - lesser;
    const milk = lesser;
    const calories = milk * 1 + sugar * 2;
    const fat = Math.round(milk * .2 + sugar * .1);
    const carbs = Math.round(sugar * .5 + milk * .02);
    const protein = Math.round(milk * .4);

    dispatch({
      type: SET_VALUES,
      sugar: `${sugar}%`,
      tea: `${tea}%`,
      milk: `${milk}%`,
      calories: calories,
      fat: fat,
      carbs: carbs,
      protein: protein
    });
  }
}
