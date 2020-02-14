import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/types';

const initialState = {
  visible: false
};

const DrawerReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_DRAWER:
        return {
          ...state,
          visible: true
        };
      case CLOSE_DRAWER:
        return {
          ...state,
          visible: false
        };
    default:
        return state;
    }
};

export default DrawerReducer;
