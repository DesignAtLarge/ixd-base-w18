import React from 'react';

import { Form, Slider, InputNumber } from 'antd';

import './style.less';

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const CustomDrink = (props) => {
  return (
    <div className="custom-drink">
      <div className="custom-drink-cup">
       <div className="sugar-layer"
         style={{
           height: props.values.sugar
         }}>
       </div>
       <div
         className="tea-layer"
         style={{
           height: props.values.tea,
           backgroundColor: props.color
         }}>
       </div>
       <div className="milk-layer"
         style={{
           height: props.values.milk
         }}>
       </div>
     </div>
     <div>
      <div className="slider" style={style}>
        <Slider
          vertical
          range
          defaultValue={[20, 50]}
          onChange={props.sliderChange}
        />
      </div>
    </div>
    <Form className="inputs" onChange={props.onChange}>
      <Form.Item>
        <InputNumber min={1} max={100} value={props.values.sugar} />
      </Form.Item>
      <h1>Sugar</h1>
      <Form.Item>
        <InputNumber min={1} max={100} value={props.values.milk} />
      </Form.Item>
      <h1>Milk</h1>
    </Form>
   </div>
  );
};

export default CustomDrink;
