import React from 'react';

import { Button, Form, Slider, InputNumber } from 'antd';
import { notify } from '../../utils/notify';

import './style.less';

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const CustomDrink = (props) => {

  const order = () => {
    notify('Ordered Drink!', props.name + ' Tea')
  }

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
          tipFormatter={(value) => {
            if(value === 100 - props.values.sugar.replace('%', '')) {
              return `${props.values.sugar}`
            }
            return `${value}%`;
          }}
        />
      </div>
    </div>
    <Form className="inputs">
      <div className="input">
        <InputNumber min={1} max={100} value={props.values.sugar} onChange={props.onSugarChange}
        />
        <h1>% Sugar</h1>
      </div>
      <div className="input">
        <InputNumber min={1} max={100} value={props.values.milk} onChange={props.onMilkChange}
          style={{
            backgroundColor: '#EEEEEE'
          }}
        />
        <h1>% Milk</h1>
      </div>
      <div className="input">
        <InputNumber min={1} max={100} value={props.values.tea} onChange={props.onMilkChange}
          style={{
            backgroundColor: props.color
          }}
        />
        <h1>% Tea</h1>
      </div>
    </Form>
    <Button className="order-button" onClick={order}>Order</Button>
    <div className="information">
      <div className="info-container">
        <div className="info"
          style={{
            backgroundColor: props.color
          }}
          >
          <p>{props.values.calories}</p>
        </div>
        <p>Calories</p>
      </div>
      <div className="info-container">
        <div className="info"
          style={{
            backgroundColor: props.color
          }}
          >
          <p>{props.values.protein}g</p>
        </div>
        <p>Protein</p>
      </div>
      <div className="info-container">
        <div className="info"
          style={{
            backgroundColor: props.color
          }}
          >
          <p>{props.values.fat}g</p>
        </div>
        <p>Fat</p>
      </div>
      <div className="info-container">
        <div className="info"
          style={{
            backgroundColor: props.color
          }}
          >
          <p>{props.values.carbs}g</p>
        </div>
        <p>Carbs</p>
      </div>
    </div>
    <style dangerouslySetInnerHTML={{__html: `
      .ant-slider-rail {
        background: ${props.color} !important;
        opacity: .5 !important;
      }

      .ant-slider-track {
        background: ${props.color} !important;
      }
    `}} />
   </div>
  );
};

export default CustomDrink;
