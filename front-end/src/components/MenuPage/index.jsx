import React from 'react';

import './style.less';
import Header from '../Header';
import Menu from '../Menu';

const HomePage = (props) => {
  return (
    <div className="homepage">
      <Header store="Ding Tea"/>
      <div className="content">
        <h1> Milk Tea </h1>
        <Menu drinks={props.milk}/>
        <h1> Fruit Tea</h1>
        <Menu drinks={props.fruit}/>
      </div>
    </div>
  );
};

export default HomePage;
