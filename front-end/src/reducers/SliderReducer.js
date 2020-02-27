import { SET_VALUES } from '../actions/types';

const initialState = {
  milk: '20%',
  tea: '30%',
  sugar: '50%',
  calories: 100,
  fat: 2,
  protein: 4,
  carbs: 2
};

const SliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VALUES:
        return {
          ...state,
          sugar: action.sugar || state.sugar,
          milk: action.milk || state.milk,
          tea: action.tea || state.tea,
          calories: action.calories || state.calories,
          fat: action.fat || state.fat,
          protein: action.protein || state.protein,
          carbs: action.carbs || state.carbs
        };
    default:
        return state;
    }
};

export default SliderReducer;
