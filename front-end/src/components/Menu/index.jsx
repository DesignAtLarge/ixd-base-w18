import React from 'react';

import './style.less';
import Drink from '../Drink';

const Menu = (props) => {
  return (
    <div className="menu">
      {props.drinks.map((drink) => {
        return (
          <div className="menu-drink">
            <Drink
              color={drink[1].color}
            />
            <h1>{drink[0]}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
