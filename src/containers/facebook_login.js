import React                  from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import FacebookLoginDisplay   from '../components/facebook_login_display';
import { facebookObject }     from '../actions/index';

const FB_APP_ID = '1317906064955234';
// safe to share

class FacebookLogin extends React.Component {
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
          const name = { name: "Login to share your name" }
          this.props.facebookObject(name);
          console.log('User cancelled login or did not fully authorize.');
        }
      });
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

  render() {
    return(
      <FacebookLoginDisplay />
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ facebookObject: facebookObject }, dispatch)
}

export default connect(null, mapDispatchToProps)(FacebookLogin);
