import React, { useState } from 'react';
import { Carousel } from 'antd';
import Drink from '../Drink';

import './style.less';
import { setDrink } from '../../actions/drinkActions'

const BobaCarousel = (props) => {
  const drinks = props.drinks;

  function onChange(index) {
    setDrink(drinks[(index + drinks.length - 1) % drinks.length]);
  }

  return (
    <div className="boba-carousel">
      <Carousel dotPosition="bottom" afterChange={props.onChange}>
        {drinks.map((drink) => {
          return (
            <div className="carousel-item" key={'caro' + drink[0]}>
              <h1>{drink[0]}</h1>
              <div className="carousel-drink">
                <Drink
                  color={drink[1].color}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default BobaCarousel;
