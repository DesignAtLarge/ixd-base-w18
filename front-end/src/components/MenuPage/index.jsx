import React from 'react';
import { Icon, Button } from 'antd';
import { NavLink } from 'react-router-dom';

import './style.less';
import Header from '../Header';
import Menu from '../Menu';

const MenuPage = (props) => {
  return (
    <div className="menupage">
      <Header store="Ding Tea"/>
      <div className="content">
        <h1> Milk Tea </h1>
        <Menu setDrink={props.setDrink} onClick={props.onSubmit} drinks={props.milk}/>
        <h1> Fruit Tea</h1>
        <Menu setDrink={props.setDrink} onClick={props.onSubmit} drinks={props.fruit}/>
        <NavLink to="/">
          <Button className="top-button"><Icon type="caret-left" /></Button>
        </NavLink>
      </div>
    </div>
  );
};

export default MenuPage;
