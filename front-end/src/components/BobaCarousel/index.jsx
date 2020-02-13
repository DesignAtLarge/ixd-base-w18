import React, { useState } from 'react';
import { Button, Carousel } from 'antd';
import Drink from '../Drink';

import './style.less';

const BobaCarousel = (props) => {
  const drinks = props.drinks;
  const [currDrink, setDrink] = useState(drinks[0]);

  function onChange(index) {
    setDrink(drinks[(index + drinks.length - 1) % drinks.length]);
  }

  return (
    <div className="boba-carousel">
      <Carousel dotPosition="bottom" afterChange={onChange}>
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
      <Button className="carousel-button">Select</Button>
    </div>
  );
};

export default BobaCarousel;
