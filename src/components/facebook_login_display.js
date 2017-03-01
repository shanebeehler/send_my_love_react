import React from 'react';

const FacebookLoginDisplay = (props) => {

  return(
    <div
      className="fb-login-button"
      data-max-rows="1"
      data-size="large"
      data-show-faces="false"
      data-auto-logout-link="true"
      >
    </div>
  );
}

export default FacebookLoginDisplay;
