import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';

import './style.less';

const DrinkDrawer = (props) => {
  return (
    <Drawer
      title="Basic Drawer"
      placement="bottom"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrinkDrawer;
