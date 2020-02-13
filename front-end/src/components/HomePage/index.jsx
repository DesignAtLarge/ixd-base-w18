import React from 'react';

import './style.less';
import BobaCarousel from '../../containers/BobaCarousel';

const HomePage = (props) => {
  return (
    <div className="homepage">
      <div className="home-header">
        <h2>Hi {props.username}</h2>
      </div>
      <BobaCarousel />
    </div>
  );
};

export default HomePage;
