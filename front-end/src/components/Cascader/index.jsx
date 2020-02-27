import React from 'react';
import { Cascader } from 'antd';

import './style.less';

const options =
[
  {
    value: 'dingtea',
    label: 'Ding Tea',
  },
  {
    value: 'happylemon',
    label: 'Happy Lemon',
  },
  {
    value: 'gongcha',
    label: 'Gong Cha',
  },
];

const CustomCascader = (props) => {
  return (
    <Cascader className="cascader" options={options} onChange={props.onChange} placeholder="Boba Shop" />
  );
};

export default CustomCascader;
