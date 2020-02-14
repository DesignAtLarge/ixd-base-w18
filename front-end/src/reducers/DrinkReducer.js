import { SET_DRINK } from '../actions/types';

const initialState = {
  currDrink: {
    name: "Default Drink",
    color: ""
  }
};

const DrinkReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_DRINK:
        return {
          ...state,
          currDrink: action.payload
        };
    default:
        return state;
    }
};

export default DrinkReducer;
