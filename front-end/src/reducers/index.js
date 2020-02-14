import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import DrawerReducer from './DrawerReducer';
import DrinkReducer from './DrinkReducer';
import MenuReducer from './MenuReducer';
import SliderReducer from './SliderReducer';
import UserReducer from './UserReducer';

export default history =>
  combineReducers({
    drawer: DrawerReducer,
    drink: DrinkReducer,
    menu: MenuReducer,
    slider: SliderReducer,
    user: UserReducer,
    router: connectRouter(history),
  });
