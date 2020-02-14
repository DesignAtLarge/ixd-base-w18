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
              />
            </Form.Item>
            <Form.Item>
              <Input
                name="drink"
                className="form-input"
                placeholder="Drink"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                size="large"
              />
            </Form.Item>
          </form>
      </div>
      <h1>Favorites</h1>
      <BobaCarousel onClick={props.onSubmit}/>
      <Button className="carousel-button" onClick={props.onSubmit}>Select</Button>
      <NavLink to="/menu">
        <Button className="all-button">All Drinks</Button>
      </NavLink>
      <DrinkDrawer visible={props.visible}/>
    </div>
  );
};

export default HomePage;
