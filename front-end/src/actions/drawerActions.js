import { CLOSE_DRAWER, OPEN_DRAWER } from './types';

export const openDrawer = () => async dispatch => {
  dispatch({
    type: OPEN_DRAWER
  });
}

export const closeDrawer = () => async dispatch => {
  dispatch({
    type: CLOSE_DRAWER
  });
}
