import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import DrawerReducer from './DrawerReducer';
import MenuReducer from './MenuReducer';

export default history =>
  combineReducers({
    drawer: DrawerReducer,
    menu: MenuReducer,
    router: connectRouter(history),
  });
