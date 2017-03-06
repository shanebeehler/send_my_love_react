import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators, createStore, combineReducers, applyMiddleware } from 'redux';
import FacebookLoginDisplay   from '../components/facebook_login_display';
import { facebookObject, fetchProfile }     from '../actions/index';
import {browserHistory, Router}          from 'react-router';
import { routerMiddleware, push } from 'react-router-redux'
// import reducers from '../reducers';
//
// const middleware = routerMiddleware(browserHistory)
// const store = createStore(
//   reducers,
//   applyMiddleware(middleware)
// )

const FB_APP_ID = '1317906064955234';
// safe to share

class FacebookLogin extends React.Component {


  // loginButton(status) {
  //   if (status === 'connected') {
  //     return
  //       <div>
  //         <button className="fb-button" onClick={this.logout.bind(this)}>Continue with Facebook</button>
  //       </div>;
  //   }
  //   else {
  //     return
  //       <div>
  //         <button className="fb-button" onClick={this.login.bind(this)}>Continue with Facebook</button>
  //       </div>;
  //   }
  // }

  componentDidMount() {

    window.fbAsyncInit = function() {
      FB.init({
        appId      : FB_APP_ID,
        cookie     : true,  // enable cookies to allow the server to access
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8', // use version 2.8
        status     : true
      });

      FB.Event.subscribe('auth.statusChange', (response) => {
        if (response.authResponse) {
          FB.api('/me', {fields: ['name', 'email']},(response) => {
            this.props.facebookObject(response);
          });
        }
        else {
          const name = { name: "logged out" }
          this.props.facebookObject(name);
          console.log('User cancelled login or did not fully authorize.');
        }
      });

      // FB.getLoginStatus(function(response) {
      //   this.loginButton(response.status).bind(this);
      // });

    }.bind(this);

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }


  login() {
    FB.login((response) => {
    }, {scope: 'public_profile,email'})
  }

  logout() {
    FB.logout((response) => {
      this.props.fetchProfile("logged out");      
      this.props.facebookObject("logged out");
        browserHistory.push('/');
    });
  }

  render() {
    // return(
    //   <FacebookLoginDisplay />
    // );
    if (this.props.loggedIn === false) {
      return (
        <div>
          <button className="fb-button" onClick={this.login.bind(this)}>Continue with Facebook</button>
        </div>
      );
    }
    else {
      return (
        <div>
          <button className="fb-button" onClick={this.logout.bind(this)}>Sign Out</button>
        </div>
      );
    }
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ facebookObject: facebookObject, fetchProfile: fetchProfile }, dispatch)
}

export default connect(null, mapDispatchToProps)(FacebookLogin);
