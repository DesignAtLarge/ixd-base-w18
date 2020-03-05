import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import WOW from "wow.js";

import './style.less';
import BobaCarousel from '../../containers/BobaCarousel';
import DrinkDrawer from '../../containers/DrinkDrawer';
import Cascader from '../../containers/Cascader';

const HomePage = (props) => {

  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <div className="homepage">
      <div className="home-header">
        <h2>Hi {props.username},</h2>
        <div className="cascade">
          <Cascader onCascade={props.onCascade} />
        </div>
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
    </div>
  );
};

export default HomePage;
