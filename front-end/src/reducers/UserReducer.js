import { LOGIN_USER } from '../actions/types';

const initialState = {
  username: '',
  authenticated: false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state,
          username: action.username,
          authenticated: true
        };
    default:
        return state;
    }
};

export default UserReducer;
