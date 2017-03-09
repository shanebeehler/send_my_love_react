import React  from 'react';
import {Link} from 'react-router';

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
      <Link to="/sendlove" activeClassName="active"><i className="fa fa-angle-down" aria-hidden="true"></i></Link>
    </div>
  );
}

export default Welcome;
