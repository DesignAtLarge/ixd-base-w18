import React, { useState } from 'react';
import { Button, Carousel } from 'antd';
import Drink from '../Drink';

import './style.less';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  centerMode: true,
  slidesToShow: 1.5,
  centerPadding: '15vw'
};

const BobaCarousel = (props) => {
  return (
    <div className="boba-carousel">
      <Carousel dotPosition="bottom" afterChange={props.onChange} {...settings}>
        {props.drinks.slice(0, 5).map((drink) => {
          return (
            <div className="carousel-item" key={'caro' + drink[0]} onClick={props.onClick}>
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
