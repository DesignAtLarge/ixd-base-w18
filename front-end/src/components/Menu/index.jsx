import React, { useEffect } from 'react';
import WOW from "wow.js";

import './style.less';
import Drink from '../Drink';
import DrinkDrawer from '../../containers/DrinkDrawer';

const Menu = (props) => {
  const submit = (values) => {
    props.setDrink(values);
    props.onClick();
  }

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="menu">
      {props.drinks.map((drink) => {
        return (
          <div className="menu-drink wow bounceIn" onClick={() => {submit(drink)}} key={`menu-${drink[0]}`}>
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
