import React      from 'react';

const Welcome = (props) => {

  return (
    <div className="welcome">
      <div className="copy-background">
        <p>
          Share Name and Location
        </p>

        <p>
          <span>   <i className="fa fa-heart" aria-hidden="true"></i>   </span>
          Send love
          <span>   <i className="fa fa-heart" aria-hidden="true"></i>   </span>
        </p>

        <p>
          Join the global love train         
        </p>
      </div>
    </div>
  );
}

export default Welcome;
