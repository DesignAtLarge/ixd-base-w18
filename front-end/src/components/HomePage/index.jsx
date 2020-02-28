import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import './style.less';
import BobaCarousel from '../../containers/BobaCarousel';
import DrinkDrawer from '../../containers/DrinkDrawer';

const HomePage = (props) => {

  return (
    <div className="homepage">
      <div className="home-header">
        <h2>Hi {props.username},</h2>
          <form onSubmit={props.handleSubmit} className="search-form">
            <Form.Item>
              <Input
                name="store"
                className="form-input"
                placeholder="Ding Tea"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                size="large"
                list="stores"
                autoComplete="off"
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="drink"
                className="form-input"
                placeholder="Drink"
                onChange={props.handleDrinkChange}
                onBlur={props.handleBlur}
                size="large"
                list="drinks"
                autoComplete="off"
              />
            </Form.Item>
          </form>
      </div>
      <div className="content">
        <h1>Favorites</h1>
        <BobaCarousel onClick={props.onSubmit}/>
        <NavLink to="/menu">
          <Button className="all-button">All</Button>
        </NavLink>
        <Button className="carousel-button" onClick={props.onSubmit}>Select</Button>
      </div>
      <DrinkDrawer visible={props.visible}/>
      <datalist id="stores">
        <option value="Ding Tea"/>
        <option value="Happy Lemon"/>
        <option value="Gong Cha"/>
      </datalist>
      <datalist id="drinks">
        {props.drinks.map((drink) => {
          return (
            <option value={drink[0]} key={`${drink[0]} option`} />
          );
        })}
      </datalist>
    </div>
  );
};

export default HomePage;
