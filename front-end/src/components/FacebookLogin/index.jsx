import React from 'react';
import FacebookLogin from 'react-facebook-login';

import './style.less';

const FacebookLoginButton = (props) => {
  return (
    <FacebookLogin
    appId="138298770714181"
    autoLoad={true}
    fields="name,email,picture"
    onClick={props.componentClicked}
    callback={props.responseFacebook} />
  )
}

export default FacebookLoginButton;
