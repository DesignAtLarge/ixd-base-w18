import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';

import './style.less';

const DrinkDrawer = (props) => {
  return (
    <Drawer
      title={props.currDrink.name}
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
    </Drawer>
  );
};

export default DrinkDrawer;
