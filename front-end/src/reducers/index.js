import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import DrawerReducer from './DrawerReducer';
import DrinkReducer from './DrinkReducer';
import MenuReducer from './MenuReducer';

export default history =>
  combineReducers({
    drawer: DrawerReducer,
    drink: DrinkReducer,
    menu: MenuReducer,
    router: connectRouter(history),
  });
