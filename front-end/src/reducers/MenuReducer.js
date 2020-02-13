import { UPDATE_DRINKS } from '../actions/types';

const initialState = {
  drinks: []
};

const MenuReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_DRINKS:
        return {
          ...state,
          drinks: action.payload.drinks
        };
    default:
        return state;
    }
};

export default MenuReducer;
