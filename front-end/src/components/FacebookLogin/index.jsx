import React from 'react';
import FacebookLogin from 'react-facebook-login';

import './style.less';

const FacebookLoginButton = (props) => {
  return (
    <FacebookLogin
    appId="138298770714181"
    autoLoad={true}
    fields="name,email,picture"
    cssClass="facebook-button"
    onClick={props.componentClicked}
    callback={props.responseFacebook}
    textButton=""
    icon="fa-facebook" />
  )
}

export default FacebookLoginButton;
