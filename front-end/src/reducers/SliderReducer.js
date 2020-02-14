import { SET_VALUES } from '../actions/types';

const initialState = {
  milk: '20%',
  tea: '30%',
  sugar: '50%'
};

const SliderReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VALUES:
        return {
          ...state,
          sugar: action.sugar,
          milk: action.milk,
          tea: action.tea
        };
    default:
        return state;
    }
};

export default SliderReducer;
