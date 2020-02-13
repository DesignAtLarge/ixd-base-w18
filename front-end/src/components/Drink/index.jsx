import React from 'react';

import './style.less';

const Drink = (props) => {
  return (
    <div className="drink">
     <div className="top-layer" style={{backgroundColor: props.color}}>
     </div>
     <div className="middle-layer">
     </div>
     <div className="bottom-layer">
     </div>
   </div>
  );
};

export default Drink;
