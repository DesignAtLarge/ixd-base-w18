import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import MenuReducer from './MenuReducer';

export default history =>
  combineReducers({
    menu: MenuReducer,
    router: connectRouter(history),
  });
