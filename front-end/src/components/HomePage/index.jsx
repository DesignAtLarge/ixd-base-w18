import React from 'react';
import { Button } from 'antd';

import './style.less';
import BobaCarousel from '../../containers/BobaCarousel';
import DrinkDrawer from '../../containers/DrinkDrawer';

const HomePage = (props) => {

  return (
    <div className="homepage">
      <div className="home-header">
        <h2>Hi {props.username}</h2>
      </div>
      <BobaCarousel />
      <Button className="carousel-button" onClick={props.onSubmit}>Select</Button>
      <DrinkDrawer visible={props.visible}/>
    </div>
  );
};

export default HomePage;
