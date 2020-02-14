import React from 'react';

import './style.less';

const Drink = (props) => {
  return (
    <div className="drink" style={{
        'background': `linear-gradient(${props.color}, white)`
      }}>
   </div>
  );
};

export default Drink;
