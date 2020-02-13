import React from 'react';

import './style.less';

const Header = (props) => {
  return (
    <div className="header">
      {props.store}
    </div>
  );
};

export default Header;
