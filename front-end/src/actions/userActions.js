import { LOGIN_USER } from './types';
import { replace } from 'connected-react-router';

export const loginUser = (credentials) => async dispatch => {
  dispatch({
    type: LOGIN_USER,
    username: credentials.username
  });
  dispatch(replace('/'));
}
