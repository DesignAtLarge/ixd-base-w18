import React from 'react';

import './style.less';
import Drink from '../Drink';
import DrinkDrawer from '../../containers/DrinkDrawer';
import { setDrink } from '../../actions/drinkActions';

const Menu = (props) => {
  const submit = (values) => {
    props.setDrink(values);
    props.onClick();
  }

  return (
    <div className="menu">
      {props.drinks.map((drink) => {
        return (
          <div className="menu-drink" onClick={() => {submit(drink)}} key={`menu-${drink[0]}`}>
            <Drink
              color={drink[1].color}
            />
            <h1>{drink[0]}</h1>
          </div>
        );
      })}
      <DrinkDrawer/>
    </div>
  );
};

export default Menu;
