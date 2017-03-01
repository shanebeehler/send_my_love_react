import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

const NavBar = (props) => {

  return (
    <nav>
      <ul>
        <li><Link to="/" activeClassName="active">pass the Love</Link></li>
        {/* <li><Link to="/new"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Send Love</Link></li> */}
        {/* <li><Link to="/posts" activeClassName="active">Love Flow</Link></li> */}
        {/* <li><Link to="/stats"><div><i className="fa fa-list-ul" aria-hidden="true"></i></div>Stats</Link></li> */}
        <li><Link to="/profile" activeClassName="active"><div><i className="fa fa-user" aria-hidden="true"></i></div></Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
