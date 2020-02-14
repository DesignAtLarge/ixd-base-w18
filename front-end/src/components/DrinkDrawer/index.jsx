import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';

import BobaCustomizer from '../../containers/BobaCustomizer';

import './style.less';

const DrinkDrawer = (props) => {
  return (
    <Drawer
      placement="bottom"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      maskStyle={{
        "background": "rgb(0,0,0,0)"
      }}
      className="drink-drawer"
      height="85%"
    >
      <h1>{props.currDrink.name}</h1>
      <hr/>
      <h2>Make Level Adjustments</h2>
      <BobaCustomizer />
    </Drawer>
  );
};

export default DrinkDrawer;
