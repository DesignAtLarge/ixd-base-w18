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
          sugar: action.sugar,
          milk: action.milk,
          tea: action.tea,
          calories: action.calories,
          fat: action.fat,
          protein: action.protein,
          carbs: action.carbs
        };
    default:
        return state;
    }
};

export default SliderReducer;
